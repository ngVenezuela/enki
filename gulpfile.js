var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', ['browser-sync']);

// Servido estático.
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./src"
        }
    });
});