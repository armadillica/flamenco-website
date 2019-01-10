var argv         = require('minimist')(process.argv.slice(2));
var gulp         = require('gulp');
var plumber      = require('gulp-plumber');
var pug          = require('gulp-pug');
var uglify       = require('gulp-uglify').default;

/* Templates - Pug */
gulp.task('templates', function() {
    gulp.src('src/templates/**/*.pug')
        .pipe(plumber())
        .pipe(pug({
            pretty: false
        }))
        .pipe(gulp.dest('templates'));
});

// While developing, run 'gulp watch'
gulp.task('watch',function() {
    gulp.watch('src/templates/**/*.pug',['templates']);
});

// Run 'gulp' to build everything at once
gulp.task('default', ['templates']);
