const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass:build', () => {
  return gulp
    .src('assets/scss/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('static/css'));
});

gulp.task('sass:watch', ['sass:build'], () => {
  gulp.watch('assets/**/*.scss', ['sass:build']);
});

gulp.task('sass', ['sass:watch', 'sass:build']);