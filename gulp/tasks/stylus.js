var gulp         = require('gulp'),
    stylus       = require('gulp-stylus'),
    postcss      = require('gulp-postcss'),
    autoprefixer = require('autoprefixer-core'),
    minifyCSS    = require('gulp-minify-css'),
    connect      = require('gulp-connect');

gulp.task('stylus', function () {
  return gulp.src('./assets/stylus/main.styl')
    .pipe(stylus({ 'include css': true }))
    .pipe(gulp.dest('./www/css/'));
});
