var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    size = require('gulp-size'),
    uglify  = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat  = require('gulp-concat'),
    del     = require('del'),
    ngAnotate = require('gulp-ng-annotate');


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

// Angular Libs Bundle
gulp.task('bundleAngularLibs',['delete'], function () {
    var angularLib = './node_modules/angular/angular.js',
        uiRouter = './node_modules/angular-ui-router/release/angular-ui-router.js';

    gulp.src([angularLib,uiRouter])
        .pipe(concat('angular-libs.min.js'))
        .pipe(uglify())
        .pipe(size({gzip: true, showFiles: true}))
        .pipe(gulp.dest('./statics/js'));
});

// Application JS Bundle
gulp.task('bundleJs',['delete'], function () {
    var module = './src/js/module/*.js',
        routes = './src/js/routes/*.js',
        controllers = './src/js/controller/*.js';

    return gulp.src([module,routes,controllers])
        .pipe(concat('enki.min.js',{newLine: ';'}))
        .pipe(ngAnotate({
            add:true,
            single_quotes: true
        }))
        .pipe(uglify())
        .pipe(size({gzip: true, showFiles: true}))
        .pipe(gulp.dest('./statics/js'))
});
// Delete
gulp.task('delete', function () {
    return del(['statics']);
});

gulp.task('default', ['delete','browser-sync', 'bundleAngularLibs', 'bundleJs']);