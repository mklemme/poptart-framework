var gulp = require('gulp'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass'),
    coffee = require('gulp-coffee'),
    concat = require('gulp-concat'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    livereload = require('gulp-livereload'),
    nodemon = require('gulp-nodemon');

var coffeeSources = [
  'components/coffee/*.coffee'
];

var jsSources = [
  'components/lib/jquery/jquery.js',
  'components/scripts/*.js'
];

var sassSources = [
  'components/sass/main.sass'
];

gulp.task('js', function() {
  gulp.src(jsSources)
          .pipe(uglify())
          .pipe(concat('script.js'))
          .pipe(gulp.dest('js'));
});

gulp.task('coffee', function() {
  gulp.src(coffeeSources)
    .pipe(coffee({ bare: true})
      .on('error', gutil.log))
    .pipe(gulp.dest('components/scripts'))
});

gulp.task('sass', function() {
  gulp.src(sassSources)
    .pipe(sass({style: 'compact', lineNumbers: true}))
      .on('error', gutil.log)
    .pipe(concat('cherry.css'))
    .pipe(gulp.dest('poptart/v1.0'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('poptart/v1.0'))
    .pipe(livereload());
});

gulp.task('project-theme', function() {
  return gulp.src('theme/main.sass')
    .pipe(sass({ style: 'expanded', lineNumbers: true}))
    .pipe(concat('theme.css'))
    .pipe(gulp.dest('css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  var server = livereload();
  gulp.watch(jsSources, ['js']);
  gulp.watch(coffeeSources, ['coffee']);
  gulp.watch('components/sass/**/*.sass', ['sass']);
  gulp.watch('theme/**/*.sass', ['project-theme']);
  gulp.watch(['js/script.js', '*.html'], function(e) {
    server.changed(e.path);
  });
});

gulp.task('develop', function () {
  nodemon({ script: 'app.js', ext: 'html js jade' })
    .on('restart', function () {
      console.log('restarted!')
    })
})


gulp.task('default', ['develop', 'sass','js', 'coffee', 'watch','project-theme']);
