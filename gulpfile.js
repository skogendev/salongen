var gulp = require('gulp');
var purgecss = require('gulp-purgecss')
var postcss = require('gulp-postcss');
var tailwindcss = require('tailwindcss');

var destination = 'web/assets/'

gulp.task('css', function () {
  return gulp.src('src/css/styles.css')
    .pipe(postcss([
      tailwindcss('tailwind.js'),
      require('autoprefixer'),
    ]))
    .pipe(purgecss({
        content: ['templates/**/*.*']
      })
    )
    .pipe(gulp.dest(destination));
});
