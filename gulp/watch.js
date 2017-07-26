var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', () => {
  watch('./dest/**/*.html', () => {
    browserSync.reload();
    console.log("Html changed, Browser-Sync reload");
  });

  watch('./src/styles/**/*.css', () => {
    gulp.start('cssInject');
  });

  browserSync.init({
    server: {
      baseDir: 'dest'
    }
  });
});

gulp.task('cssInject', ['styles'], () => {
  return gulp.src('./dest/static/css/styles.css')
    .pipe(browserSync.stream());
});
