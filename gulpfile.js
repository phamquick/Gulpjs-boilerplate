'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    minifyCss = require('gulp-minify-css'),
    minifyHTML = require('gulp-minify-html'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    sourcemaps = require('gulp-sourcemaps'),
    del = require('del'),
    notify = require("gulp-notify");


gulp.task('clean', function () {
    del(['dist/**/*']);
});

gulp.task('sass', function () {
    gulp.src('./src/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./src/css'));
});

gulp.task('html', function () {
    var assets = useref.assets();
    var opts = {
        conditionals: true,
        spare: true
    };

    return gulp.src('src/**/*.html')
        .pipe(assets)
        //.pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(assets.restore())
        .pipe(useref())
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('dist'))
        .pipe(notify("Done!"));
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['clean', 'sass', 'html']);
