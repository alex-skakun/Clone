(function () {

    'use strict';

    var gulp = require('gulp'),
        rename = require('gulp-rename'),
        uglify = require('gulp-uglify'),
        del = require('del'),
        bump = require('gulp-bump'),
        tagVersion = require('gulp-tag-version');

    gulp.task('default', [
        'clean',
        'uglify'
    ]);

    gulp.task('release', [
        'clean',
        'version',
        'uglify',
        'release-tag'
    ]);

    gulp.task('clean', function (cb) {
        del([
            './www/*'
        ], cb);
    });

    gulp.task('version', function (cb) {
        gulp.src('./package.json')
            .pipe(bump())
            .pipe(gulp.dest('./'))
            .on('end', cb);
    });

    gulp.task('uglify', ['clean'], function (cb) {
        gulp.src('./src/*.js')
            .pipe(uglify())
            .pipe(rename({
                suffix: '.min'
            }))
            .pipe(gulp.dest('./dist'))
            .on('end', cb);
    });

    gulp.task('release-tag', ['version'], function () {
        gulp.src(['./package.json']).pipe(tagVersion());
    });


}());




