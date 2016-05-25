var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    size = require('gulp-size'),
    uglify  = require('gulp-uglify'),
    rename = require('gulp-rename');


// Servidor estático.
// Crea un servidor local y efectúa un Livereload
// cuando ocurren cambios  dentro de directorio 'src'.
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
    gulp.watch(['./src/**/*'], browserSync.reload);
});

// Js Bundle
gulp.task('bundleJS', function () {
    
    gulp.src('./node_modules/angular/angular.js')
        .pipe(uglify())
        .pipe(size({gzip: true, showFiles: true}))
        .pipe(rename('angular.min.js'))
        .pipe(gulp.dest('./src/js'));
        
    gulp.src('./node_modules/angular-ui-router/release/angular-ui-router.js')
        .pipe(uglify())
        .pipe(size({gzip: true, showFiles: true}))
        .pipe(rename('angular-ui-router.min.js'))
        .pipe(gulp.dest('./src/js')); 
});


gulp.task('default', ['browser-sync', 'bundleJS']);