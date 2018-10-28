"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var server = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var posthtml = require("gulp-posthtml");
var del = require("del");

gulp.task("css", function () {
  return gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("source/build/css"))
    .pipe(csso())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("source/build/css"));
});

gulp.task("images", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
  ]))
  .pipe(gulp.dest("source/build/img")):
}):

gulp.task("webp", function (){
  return gulp.src("source/img/**/.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("source/build/img"));
})

gulp.task("sprite", function() {
  return gulp.src("source/img/*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))  
    .pipe(gulp.dest("source/build/img"));
});

gulp.task("html", function (){
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest("source/build"));
});

gulp.task("clean", function () {
  return del("source/build");
});

gulp.task("build", gulp.series(
  "clean",
  "copy",
  "css",
  "sprite",
  "html"
  ));

gulp.task("server", function () {
  server.init({
    server: "source/build/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  .gulp.task("copy", function () {
    return gulp.src([
        "source/fonts/**/.{woff,woff2}",
        "source/img/**",
        "source/js/**"
      ], {
        base: "source"
      })
      .pipe(gulp.dest("source/build"));
  })

  gulp.watch("source/less/**/*.less", gulp.series("css"));
  gulp.watch("source/img/.svg", gulp.series("sprite", "html", "refresh"));
  gulp.watch("source/*.html", gulp.series("html", "refresh"));
});

gulp.task("start", gulp.series("build", "server"));
