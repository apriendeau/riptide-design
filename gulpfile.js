var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');


gulp.task('scripts', function() {
    return gulp.src('scripts/**/*.js')
      .pipe(concat('scripts.js'))
      .pipe(gulp.dest('dist/scripts'));
});

gulp.task('html', function(){
  return gulp.src('html/**/*.html')
    .pipe(gulp.dest('dist/'))
});

gulp.task('sass', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('js:watch', function () {
  gulp.watch('./scripts/**/*.js', ['scripts']);
});

gulp.task('html:watch', function () {
  gulp.watch('./html/**/*.html', ['html']);
});

gulp.task('watch', ['sass:watch', 'js:watch', 'html:watch']);
gulp.task('default', [ 'html', 'sass', 'scripts' ]);
