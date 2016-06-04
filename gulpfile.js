var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('jade', function(){
	gulp.src('./src/*.jade')
	.pipe(jade({
		pretty: true
	}))
	.pipe(gulp.dest('./dist'));
});

gulp.task('watch', function(){
	gulp.watch('./src/*.jade', ['jade']);
	gulp.watch('./src/mixins/*.jade', ['jade']);
	gulp.watch('./src/layouts/*.jade', ['jade']);
});

gulp.task('default', ['jade', 'watch']);