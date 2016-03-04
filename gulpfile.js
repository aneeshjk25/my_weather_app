var gulp 	= require('gulp'),
	merge 	= require('merge-stream'),
	clean   = require('gulp-clean'),
	sass	= require('gulp-sass'),
	concat 	= require('gulp-concat'),
	runSeq  = require('run-sequence');


function copy( source , destination ){
	return gulp.src(source)
		.pipe(gulp.dest(destination));
}
gulp.task('default',function(){

})
gulp.task('clean',function(){
	return gulp.src('./build')
		.pipe(clean());
})

gulp.task('styles',function(){
	return gulp.src('css/*.scss')
		  .pipe(sass())
		  .pipe(concat('./main.css'))
		  .pipe(gulp.dest('build/css'));

})
gulp.task('build-chrome-extension',function(){
	return merge(
		copy('platforms/chrome/*.js','build/chrome/js'),
		copy('build/css/*.css','build/chrome/css'),
		copy('platforms/chrome/manifest.json','build/chrome'),
		copy('images/*.png','build/chrome/images'),
		copy('js/*.js','build/chrome/js'),
		copy('vendor/**/*.*','build/chrome/vendor')
		);
})
gulp.task('build-chrome', function(){
	return runSeq('clean','styles' ,'build-chrome-extension')
})