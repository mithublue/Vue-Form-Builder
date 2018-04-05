var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

var dirs = {
    css: 'assets/css',
    js: 'assets/js',
    less: 'assets/less'
};

gulp.task('webpack', function() {
    return gulp.src(dirs.js+'/main.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest(dirs.js));
});

/*gulp.task('uglify', function () {
    return gulp.src(dirs.js+'/managx.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(dirs.js))
});*/

gulp.task('watch', function () {
    gulp.watch(dirs.js+'/**', ['webpack']);
    gulp.watch(dirs.js+'/main.js', ['webpack']);
});

gulp.task('default', ['webpack']);
gulp.task('release', ['webpack']);
gulp.task('zip', ['clean', 'copy', 'compress']);
