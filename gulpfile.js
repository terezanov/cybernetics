var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
 
gulp.task('less', function() {
  return gulp.src('styles/style.less')
    .pipe(less())
    .pipe(gulp.dest('styles'));
});

gulp.task('watch', function() {
	watch('styles/style.less', function() {
		gulp.start('less');
	});
});

gulp.task('default', ['watch']);