var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
		gulp.src('./src-front/scss/*.scss')
				.pipe(sass())
				.pipe(gulp.dest('./public/css'));
});
