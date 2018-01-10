var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var utilities = require('gulp-util');
var buildProduction = utilities.env.production;
var del = require('del');
var jshint = require('gulp-jshint');
var lib = require('bower-files')({
  "overrides":{
    "bootstrap" : {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
});
var browserSync = require('browser-sync').create();
var babelify = require('babelify');

gulp.task('copyHtml', ['copyCss'], function() {
  gulp.src('src/index.html')
    .pipe(gulp.dest('dist/'));
});
gulp.task('copyCss', function() {
  gulp.src('src//css/styles.css')
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('concatInterface', function() {
  return gulp.src('./src/js/*-interface.js')
  .pipe(concat('allConcat.js'))
  .pipe(gulp.dest('./tmp'));
});

gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({ entries: ['./tmp/allConcat.js']})
    .transform(babelify.configure({
      presets: ["es2015"]
    }))
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('minifyJS', ['jsBrowserify'], function() {
  return gulp.src('./dist/js/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('clean', function() {
  return del(['dist/js', 'tmp']);
});

gulp.task('jshint', function() {
  return(gulp.src(['src/js/*.js']))
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('bowerJS', function() {
  return gulp.src(lib.ext('js').files)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('bowerCSS', function () {
  return gulp.src(lib.ext('css').files)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('bower', ['bowerJS', 'bowerCSS']);

gulp.task('build', ['clean'], function() {
  if (buildProduction){
    gulp.start('minifyJS');
  } else {
    gulp.start('jsBrowserify');
  }
  gulp.start('bower');
  gulp.start('copyHtml');
});

gulp.task('jsBuild', ['jsBrowserify', 'jshint'], function() {
  browserSync.reload();
});

gulp.task('bowerBuild', ['bower'], function() {
  browserSync.reload();
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./dist/",
      index: "index.html"
    }
  });

  gulp.watch(['src/js/*.js'], ['jsBuild']);
  gulp.watch(['bower.json'], ['bowerBuild']);
  gulp.watch(['src/css/*.css'], ['copyCss']);
  gulp.watch(['src/index.html'], ['copyHtml']);
});
