/*

A quick note regarding environments:

1) Set (mode.prod()) or (mode.dev()) before tasks if that task is only needed for that environment
2) Run gulp --prod before deployment to prod

*/

var browsersync = require('browser-sync').create(),
    errorHandler = require('gulp-error-handle'),
    gulp = require('gulp'),
    mode = require('gulp-mode')({
      modes: ['prod','dev'],
      default: 'dev'
    }),
    pkg = require('./package.json'),
    replace = require('gulp-replace'),
    purgecss = require('gulp-purgecss'),
    postcss = require('gulp-postcss'),
    postcssfor = require('postcss-for'),
    postcssimport = require('postcss-easy-import'),
    postcssNesting = require('postcss-nested'),
    tailwindcss = require('tailwindcss'),
    watch = require('gulp-watch'),
    webpack = require("webpack"),
    webpackconfig = require("./webpack.config.js"),
    webpackstream = require("webpack-stream");



/* Browsersync */
function browserSync(done) {
  browsersync.init({
    proxy: pkg.paths.siteUrl.dev,
    port: 8080,
    open: true,
    notify: false
  });
  done();
}

function browserSyncReload(done) {
  browsersync.reload();
  done();
}


/* Building files */
function css(done) {

  gulp
    .src(pkg.paths.src.css + 'styles.css')
    .pipe(errorHandler())
    .pipe(postcss([
      postcssimport(),
      postcssfor(),
      tailwindcss('./tailwind.config.js'),
      postcssNesting(),
      require('autoprefixer')
    ]))
    .pipe((mode.prod(purgecss({
        content: [pkg.paths.templates + '**/*.*']
      })
    )))
    .pipe(gulp.dest(pkg.paths.dest.css))
  if (mode.prod()) {
    assetBust();
  }
  browserSyncReload(done);
  done();
}

function js(done) {

  gulp
    .src([pkg.paths.src.js + "/**/*"])
    .pipe(errorHandler())
    .pipe(webpackstream(webpackconfig, webpack))
    .pipe(gulp.dest(pkg.paths.dest.js));
  browserSyncReload(done);
  done();
}


/* Static assets versioning */
function assetBust(done){
  gulp.src(pkg.paths.craft.config + '/general.php')
  .pipe(replace(/'staticAssetsVersion' => (\d+),/g, function(match, p1, offset, string) {
    p1++;
    return "'staticAssetsVersion' => " + p1 + ",";
  }))
  .pipe(gulp.dest(pkg.paths.craft.config));
  done();
}

/* Watch */
function watchFiles(done) {
  gulp.watch(pkg.paths.src.css + '**/*', css);
  gulp.watch(pkg.paths.src.js + '**/*', js);
  done();
}

/* Tasks */
gulp.task("css", css);
gulp.task("js", js);

/* The task. Run gulp watch from CLI */
gulp.task('dev', gulp.parallel(watchFiles, browserSync));
gulp.task('build', gulp.parallel(css, assetBust));
