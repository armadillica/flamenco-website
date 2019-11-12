const gulp    = require('gulp');
const plumber = require('gulp-plumber');
const pug     = require('gulp-pug');

/* Templates - Pug */
gulp.task('templates', function(done) {
    gulp.src('src/templates/**/*.pug')
        .pipe(plumber())
        .pipe(pug({
            pretty: false
        }))
        .pipe(gulp.dest('templates'));
    done();
});

// While developing, run 'gulp watch'
gulp.task('watch',function() {
    gulp.watch('src/templates/**/*.pug', gulp.series(['default']));
});

// Run 'gulp' to build everything at once
gulp.task('default', gulp.series(['templates']));
