// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var uglifycss = require('gulp-uglifycss');
var imagemin = require('gulp-imagemin');
var PngCrush = require('pngcrush'),
    myCrusher = new PngCrush(['-res', 300, '-rle']);

// Minify CSS
gulp.task('css', function () {
  gulp.src('css/*.css')
    .pipe(concat('css/all.css'))
    .pipe(gulp.dest('dist'))
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(rename('all.min.css'))
    .pipe(gulp.dest('dist/css'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('js/all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

//optimize images
gulp.task('jpgs', function () {
  return gulp.src('img/**/*', {base: './img'})
  .pipe(imagemin({
    verbose: true,
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [PngCrush()]
  }))
  .pipe(gulp.dest('dist/img'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['scripts']);
    gulp.watch('css/*.css', ['css']);
});

// Default Task
gulp.task('default', [ 'css', 'scripts', 'watch']);
