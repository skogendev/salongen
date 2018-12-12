/*

A quick note regarding environments:

1) Set (mode.prod()) or (mode.dev()) before tasks if that task is only needed for that environment
2) Run gulp --prod before deployment to prod

*/

var browserSync = require('browser-sync').create(),
    errorHandler = require('gulp-error-handle'),
    gulp = require('gulp'),
    mode = require('gulp-mode')({
      modes: ['prod','dev'],
      default: 'dev'
    }),
    php = require('gulp-connect-php'),
    pkg = require('./package.json'),
    replace = require('gulp-replace'),
    purgecss = require('gulp-purgecss'),
    postcss = require('gulp-postcss'),
    tailwindcss = require('tailwindcss'),
    watch = require('gulp-watch');

/* Building files */
gulp.task('default', function () {
  gulp.src(pkg.paths.src.css +  'styles.css')
    .pipe(errorHandler())
    .pipe(postcss([
      tailwindcss('tailwind.js'),
      require('autoprefixer'),
    ]))
    .pipe((mode.prod(purgecss({
        content: [pkg.paths.templates + '**/*.*']
      })
    )))
    .pipe(gulp.dest(pkg.paths.dest.css));
  if (mode.prod()) {
    gulp.start('asset-bust')
  }
});

/* Creating PHP server for browserSync */
gulp.task('php', function() {
  php.server({ base: 'build', port: 8010, keepalive: true});
});

/* Setting up browserSync */
gulp.task('browser-sync', ['php'], function(){
  browserSync.init({
    proxy: pkg.paths.siteUrl.dev,
    port: 8080,
    open: true,
    notify: false
  });
});

/* Static assets versioning */
gulp.task('asset-bust', function(){
  gulp.src(pkg.paths.craft.config + '/general.php')
  .pipe(replace(/'staticAssetsVersion' => (\d+),/g, function(match, p1, offset, string) {
    p1++;
    return "'staticAssetsVersion' => " + p1 + ",";
  }))
  .pipe(gulp.dest(pkg.paths.craft.config));
});

/* The task. Run gulp watch from CLI */
gulp.task('watch', ['browser-sync'], function(){
  watch(pkg.paths.src.base+'/**/*',function(){
      gulp.start('default');
      browserSync.reload();
  });
});
