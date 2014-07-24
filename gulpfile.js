var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var transpile = require('gulp-es6-module-transpiler');

var paths = {
  dest: 'dist',

  // file extensions
  html: 'lib/**/*.html',
  js: 'lib/**/*.js'
};

gulp.task('scripts', function () {
  gulp.src(paths.js)
    .pipe(transpile({ type: 'cjs' }))
    //.pipe(concat('app.min.js')) // this makes one file period, not one per directory
    //.pipe(uglify())
    .pipe(gulp.dest(paths.dest));
});

gulp.task('templates', function () {
  gulp.src(paths.html)
    .pipe(gulp.dest(paths.dest));
});

gulp.task('default', ['templates', 'scripts']);
