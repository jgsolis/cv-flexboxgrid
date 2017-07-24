const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const bulksass = require('gulp-sass-bulk-import');
const concat = require('gulp-concat');
const plumber = require('gulp-plumber');

gulp.task('jquery', () => {
	gulp.src('./node_modules/jquery/dist/jquery.min.js')
		.pipe(gulp.dest('./public/js/'));
	gulp.src('./node_modules/jquery/dist/jquery.min.map')
		.pipe(gulp.dest('./public/js/'));
});


gulp.task('serve', ['sass'], () => {
	browserSync.init({
		server: './public'
	});

	gulp.watch('./src/sass/**/*.scss', ['sass']);
	gulp.watch('./src/js/**/*.js', ['uglify']);
	gulp.watch('./public/*.html').on('change', browserSync.reload);
});

gulp.task('sass', () => {
	gulp.src('./src/sass/main.scss')
		.pipe(plumber())
		.pipe(bulksass())
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 10 versions'],
			cascade: false
		}))
		.pipe(cssnano())
		.pipe(rename('bundle.min.css'))
		.pipe(gulp.dest('./public/css/'))
		.pipe(browserSync.stream());
});

gulp.task('jpg', () => {
	gulp.src('./src/img/**/*.jpg')
		.pipe(imagemin())
		.pipe(gulp.dest('./public/img/'))
});

gulp.task('uglify', () => {
	gulp.src('./src/js/**/*.js')
		.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(rename('bundle.min.js'))
		.pipe(gulp.dest('./public/js/'))
		.pipe(browserSync.stream());
});