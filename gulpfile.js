var gulp = require('gulp'),
plugins = require('gulp-load-plugins')(),
webpack = require('webpack-stream');

gulp.task("styles", function () {
    gulp.src("scss/**/*.scss")
      .pipe(plugins.watch("scss/**/*.scss"))
      .pipe(plugins.plumber())
        .pipe(plugins.sass({
            outputStyle:'expanded'
        }).on('error', plugins.sass.logError))
        .pipe(plugins.autoprefixer())
        .pipe(gulp.dest("public/css/"))
        .pipe(plugins.livereload());
})

gulp.task("scripts", function () {
    gulp.src("script/**/*.js")
      .pipe(plugins.watch("script/**/*.js"))
      .pipe(plugins.plumber())
      .pipe(plugins.babel({
        presets: ['es2015']
      }))
      .pipe(gulp.dest("public/js/"))
      .pipe(plugins.livereload());
})

// 自动刷新
gulp.task("Refresh",function () {
    var loverlive = plugins.livereload({start:true});
})

gulp.task("default",["Refresh","scripts","styles"])