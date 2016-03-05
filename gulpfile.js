var gulp 	= require('gulp'),
	merge 	= require('merge-stream'),
	clean   = require('gulp-clean'),
	sass	= require('gulp-sass'),
	concat 	= require('gulp-concat'),
	runSeq  = require('run-sequence'),
	shell	= require('gulp-shell');


function copy( source , destination ){
	return gulp.src(source)
		.pipe(gulp.dest(destination));
}
gulp.task('default',function(){

});
gulp.task('clean',function(){
	return gulp.src('./build')
		.pipe(clean());
});

gulp.task('styles',function(){
	return gulp.src('css/*.scss')
		  .pipe(sass())
		  .pipe(concat('./main.css'))
		  .pipe(gulp.dest('build/css'));

});
gulp.task('build-chrome-extension',function(){
	return merge(
		copy('platforms/chrome/*.js','build/chrome/js'),
		copy('build/css/*.css','build/chrome/css'),
		copy('platforms/chrome/manifest.json','build/chrome'),
		copy('images/**/*','build/chrome/images'),
		copy('js/*.js','build/chrome/js'),
		copy('vendor/**/*.*','build/chrome/vendor'),
		copy('html/*.html','build/chrome/html')
		);
});
gulp.task('build-firefox-extension',function(){
	return merge(
		copy('platforms/firefox/browser.js','build/firefox/data/js'),
		copy('build/css/*.css','build/firefox/data/css'),
		copy('platforms/firefox/package.json','build/firefox'),
		copy('platforms/firefox/main.js','build/firefox/data'),
		copy('images/*.png','build/firefox/data/images'),
		copy('js/*.js','build/firefox/data/js'),
		copy('vendor/**/*.*','build/firefox/data/libs'),
		copy('html/*.html','build/firefox/data/html')
		);
});
gulp.task('build-firefox',function(){
	return runSeq('clean','styles','build-firefox-extension');
});
gulp.task('firefox-create-xpi',shell.task([
		'mkdir -p dist/firefox',
		//'cd ./build/firefox && jpm sign --api-key '+API.KEY+' --api-secret '+API.SECRET
		//'cd ./build/firefox && jpm xpi'
		'cd ./build/firefox && jpm post --post-url http://localhost:8888/'
]));
gulp.task('firefox-copy-dist',function(){
	copy('build/firefox/my_weather_app-1.0.0.xpi','dist/firefox');
});
gulp.task('firefox-dist',function(){
	return runSeq('firefox-create-xpi','firefox-copy-dist');
});

gulp.task('build-chrome', function(){
	return runSeq('clean','styles' ,'build-chrome-extension');
});
gulp.task('watch-js',function(){
	gulp.watch('js/*.js',['build-chrome']);
});