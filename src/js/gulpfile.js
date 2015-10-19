'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var sourcemaps = require('gulp-sourcemaps');
var del = require('delete');

var paths = {
  scripts: ['src/js/**/*.js'],
  images: 'src/img/**/*'
};

gulp.task('clean', function() {

});


var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  gulp.src('./src/sass/**/*.scss')
  	.pipe(sourcemaps.init())
    	.pipe(sass().on('error', sass.logError))
    	.pipe(sass({outputStyle: 'compressed'}))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
});
//

gulp.task('jscompress', function() {
  return gulp.src('./src/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});



// The default task (called when you run `gulp` from cli)
gulp.task('default', ['clean','sass','jscompress']);
