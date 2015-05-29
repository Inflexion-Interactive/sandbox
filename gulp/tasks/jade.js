var gulp    = require('gulp'),
    insert  = require('gulp-insert'),
    connect = require('gulp-connect'),
    jade    = require('gulp-jade');

gulp.task('jade', function() {
  gulp.src(['./views/*.jade', '!./views/layout.jade'])
    .pipe(jade({
      locals: require('../../data/www_content'),
      pretty: true
    }))
    .pipe(gulp.dest('./www/'))
    .pipe(connect.reload());
});
