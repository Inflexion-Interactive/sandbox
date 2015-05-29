var gulp     = require('gulp'),
    connect = require('gulp-connect'),
    imagemin = require('gulp-imagemin');

gulp.task('images', function () {
  return gulp.src('./assets/images/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{ removeViewBox: false }]
    }))
    .pipe(gulp.dest('./www/images'))
    .pipe(connect.reload());
});
