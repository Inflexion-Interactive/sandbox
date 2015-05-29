var gulp       = require('gulp'),
    connect    = require('gulp-connect'),
    browserify = require('browserify'),
    babelify   = require('babelify'),
    source     = require('vinyl-source-stream'),
    buffer     = require('vinyl-buffer');

gulp.task('libs', function() {
  return gulp.src('./assets/javascripts/lib/**/*.js')
    .pipe(gulp.dest('./www/js/lib'))
    .pipe(connect.reload());
});

gulp.task('js', ['libs'], function() {
  browserify('./assets/javascripts/index.js', { debug: true })
  .transform(babelify)
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./www/js/'))
  .pipe(connect.reload());
});
