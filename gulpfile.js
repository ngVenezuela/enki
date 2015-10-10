var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', ['browser-sync']);

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