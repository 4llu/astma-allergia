var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require("gulp-clean-css");

var rootDir = "";

// Default
gulp.task("default", ["styles", "watch"]);

// compile sass
gulp.task("styles", function () {
    return gulp.src(rootDir + "style/sass/master.scss")
        // compile sass
        .pipe(sass({
            includePaths: require("node-neat").includePaths,
            style: "compressed"
        }).on("error", sass.logError))
        // add prefixes
        .pipe(autoprefixer({
            browsers: ["> 1%"],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: "ie11"}))
        .pipe(gulp.dest(rootDir + "style"));
});

// watch
gulp.task("watch", ["styles"], function() {
   gulp.watch(rootDir + "style/sass/**/*.scss", ["styles"]);
})
