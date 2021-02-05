var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('./sass/**/components.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('./css/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/components.scss', ['sass']);
});