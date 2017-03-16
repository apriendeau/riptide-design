var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var clean = require('gulp-clean');

gulp.task('clean-html', function() {
  return gulp.src('./dist')
    .pipe(clean())
})

gulp.task('clean-js', function() {
  return gulp.src('./dist/js')
    .pipe(clean())
})
gulp.task('clean-scss', function() {
  return gulp.src('./dist/css')
    .pipe(clean())
})

gulp.task('scripts', ['clean-js'], function() {
    return gulp.src('scripts/**/*.js')
      .pipe(concat('app.js'))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
});

gulp.task('html', ['clean-html'], function(){
  return gulp.src('html/**/*.html')
    .pipe(gulp.dest('dist/'))
});

gulp.task('sass', ['clean-scss'], function () {
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
