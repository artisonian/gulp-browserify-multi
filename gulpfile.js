var path = require('path');

var gulp = require('gulp');
var gutil = require('gulp-util');

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var paths = {
  base: './lib',
  dest: 'dist',

  // file extensions
  html: 'lib/**/*.html',
  js: 'lib/**/app.js'
};

gulp.task('scripts', function () {
  var bundle = function (err, files) {
    if (err) { return gutil.log(err); }

    files.forEach(function (f) {
      var basedir = path.dirname(f.path);
      var outfile = gutil.replaceExtension(f.relative, '.min.js');

      browserify(f, { basedir: basedir })
        .transform({ global: true }, 'uglifyify')
        .bundle()
        .pipe(source(outfile))
        .pipe(gulp.dest(paths.dest));
    });
  };

  return gulp.src(paths.js)
    .pipe(gutil.buffer(bundle))
    .pipe(reload({ stream: true }));
});

gulp.task('templates', function () {
  return gulp.src(paths.html)
    .pipe(gulp.dest(paths.dest))
    .pipe(reload({ stream: true }));
});

gulp.task('browser-sync', function () {
  browserSync({
    server: { baseDir: paths.dest }
  });
});

gulp.task('build', ['templates', 'scripts']);

gulp.task('default', ['build', 'browser-sync'], function () {
  gulp.watch('lib/**/*', ['build']);
});
