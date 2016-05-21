var gulp          = require('gulp'),
    plumber       = require('gulp-plumber'),
    sass          = require('gulp-sass'),
    sourcemaps    = require('gulp-sourcemaps'),
    autoprefixer  = require('gulp-autoprefixer'),
    jade          = require('gulp-jade'),
    uglify        = require('gulp-uglify'),
    concat        = require('gulp-concat'),
    rename        = require('gulp-rename'),
    livereload    = require('gulp-livereload');


/* CSS */
gulp.task('styles', function() {
    gulp.src('src/styles/**/*.sass')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'}
            ))
        .pipe(autoprefixer("last 3 version", "safari 5", "ie 8", "ie 9"))
        .pipe(rename('style.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('assets/static'))
        .pipe(livereload());
});

/* Templates - Jade */
gulp.task('templates', function() {
    gulp.src('src/templates/**/*.jade')
        .pipe(jade({
            pretty: false
        }))
        .pipe(gulp.dest('templates'))
        .pipe(livereload());
});

/* Scripts */
gulp.task('scripts', function() {
    gulp.src('src/scripts/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename(function(path){
            path.extname = '.min.js'
        }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('assets/static/js'))
        .pipe(livereload());
});

/* Scripts Concatenated */
gulp.task('scripts-tutti', function() {
    gulp.src('src/scripts/tutti/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat("tutti.min.js"))
        .pipe(uglify())
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('assets/static/js'))
        .pipe(livereload());
});

// While developing, run 'gulp watch'
gulp.task('watch',function() {
    livereload.listen();

    gulp.watch('src/styles/**/*.sass',['styles']);
    gulp.watch('src/templates/**/*.jade',['templates']);
    gulp.watch('src/scripts/tutti/**/*.js',['scripts']);
});

// Run 'gulp' to build everything at once
gulp.task('default', ['styles', 'templates', 'scripts', 'scripts-tutti']);

