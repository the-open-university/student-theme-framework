// gulpfile.js
var gulp         = require('gulp'),
    // gutil        = require('gulp-util'),
    autoprefixer = require('gulp-autoprefixer'),
    // minifycss    = require('gulp-minify-css'),
    // rename       = require('gulp-rename'),
    // shell        = require('gulp-shell'),
    cp           = require('child_process'),
    livereload   = require('gulp-livereload'),
    connect      = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: '_site',
    livereload: true
  });
});

gulp.task('css', function() {
  return gulp.src('gui/*.css')
    .pipe(autoprefixer( 'last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4' ))
    .pipe(gulp.dest('_site/gui'))
    .pipe(connect.reload());
});

gulp.task('jekyll-rebuild', function(done) { 
  return cp.spawn('bundle', ['exec', 'jekyll', 'build', '-q'], { stdio: 'inherit' })
  .on('close', done );
});

gulp.task('build', ['jekyll-rebuild'], function() {
  gulp.src('./_site/*.html')
      .pipe(connect.reload());
});

gulp.task('watch', function() {

  gulp.watch('gui/*.css', ['css']);

  gulp.watch([
    '_includes/**/*.html',
    '_layouts/**/*.html',
    '_posts/**/*',
    '*.html'
  ], ['build']);

});

gulp.task('default', ['connect', 'watch']);
