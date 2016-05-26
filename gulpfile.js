var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    size = require('gulp-size'),
    uglify  = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat  = require('gulp-concat'),
    del     = require('del');


// Servidor estático.
// Crea un servidor local y efectúa un Livereload
// cuando ocurren cambios  dentro de directorio 'src'.
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(['./src/**/*'], browserSync.reload);
});

// Js Bundle
gulp.task('bundleJS',['delete'], function () {
    var angularLib = './node_modules/angular/angular.js',
        uiRouter = './node_modules/angular-ui-router/release/angular-ui-router.js';

    gulp.src([angularLib,uiRouter])
        .pipe(concat('angular-libs.min.js'))
        .pipe(uglify())
        .pipe(size({gzip: true, showFiles: true}))
        .pipe(gulp.dest('./statics/js'));
});

// Delete
gulp.task('delete', function () {
    return del(['statics']);
});

gulp.task('default', ['delete','browser-sync', 'bundleJS']);