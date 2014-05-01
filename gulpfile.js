var gulp = require('gulp');  
var sass = require('gulp-sass');  
var browserSync = require('browser-sync');

gulp.task('sass', function () {  
    gulp.src('resource/scss/main.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('resource/css'));
});

gulp.task('browser-sync', function() {  
    browserSync.init(["resource/css/*.css", "resource/js/*.js"], {
        server: {
            baseDir: "./"
        }
    });
});

// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('default', ['sass', 'browser-sync'], function () {  
    gulp.watch("*scss/*.scss", ['sass']);
    gulp.watch("*/scss/*.scss", ['sass']);
    gulp.watch("*.js", ['bs-reload']);
    gulp.watch("*/*.js", ['bs-reload']);
    gulp.watch("*.html", ['bs-reload']);
    gulp.watch("*/*.html", ['bs-reload']);
});