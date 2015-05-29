var gulp  = require('gulp');

gulp.task('watch', function() {
  gulp.watch(['./views/**/*.jade'], ['jade']);
  gulp.watch(['./assets/javascripts/**/*.js'], ['js']);
  gulp.watch(['./assets/stylus/**/*.styl'], ['stylus']);
  gulp.watch(['./assets/images/*'], ['images']);
});
