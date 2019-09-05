
const { series, src, dest } = require('gulp');
const sass = require('gulp-sass');
const gulpClean = require('gulp-clean');
const gulpMinify = require('gulp-minify');
const cleanCss = require('gulp-clean-css');
const gulpRename = require("gulp-rename");
const distPath = "./dist";

// Clear dist folder
function clean() {
  return src(distPath + "/*", {read: false})
        .pipe(gulpClean());
}

// Compile scss
function sassCompile() {
    return src('src/tuicss.scss')
        .pipe(sass())
        .pipe(dest(distPath));
}

function minifyCss() {
    return src(distPath + '/tuicss.css')
        .pipe(cleanCss())
        .pipe(gulpRename({
            suffix: ".min"
        }))
        .pipe(dest(distPath));
}

function copyScript() {
    return src('src/js/tuicss.js')
        .pipe(dest(distPath));
}

function minifyJs() {
    return src(distPath + '/tuicss.js')
        .pipe(gulpMinify({
            ext:{
                min:'.min.js'
            }
        }))
        .pipe(dest(distPath));
}

function copyImages() {
    return src('src/images/*')
        .pipe(dest(distPath + "/images"));
}

function copyFonts() {
    return src('src/fonts/*')
        .pipe(dest(distPath + "/fonts"));
}

exports.default = series(clean, sassCompile, minifyCss, copyScript, minifyJs, copyImages, copyFonts);




