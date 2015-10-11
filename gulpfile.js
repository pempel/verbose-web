"use strict";

var gulp = require("gulp");
var sass = require("gulp-sass");
var connect = require("gulp-connect");
var eslint = require("gulp-eslint");

var browserify = require("browserify");
var reactify = require("reactify");
var history = require("connect-history-api-fallback");
var source = require("vinyl-source-stream");

var config = {
  port: 9005,
  paths: {
    html: "./src/*.html",
    bootstrapCss: "./bower_components/bootstrap-sass/assets/stylesheets",
    css: "./src/**/*.scss",
    js: "./src/**/*.js",
    appJs: "./src/app.js",
    dist: "./dist"
  }
}

gulp.task("connect", function() {
  connect.server({
    root: ["dist"],
    port: config.port,
    livereload: true,
    middleware: function(connect, opt) {
      return [
        history()
      ]
    }
  });
});

gulp.task("html", function() {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

gulp.task("css", function() {
  gulp.src("./src/app.scss")
    .pipe(sass({includePaths: [config.paths.bootstrapCss]}))
    .pipe(gulp.dest(config.paths.dist + "/styles"))
    .pipe(connect.reload());
});

gulp.task("js", function() {
  browserify(config.paths.appJs)
    .transform(reactify)
    .bundle()
    .on("error", console.error.bind(console))
    .pipe(source("app.js"))
    .pipe(gulp.dest(config.paths.dist + "/scripts"))
    .pipe(connect.reload());
});

gulp.task("lint", function() {
  return gulp.src(config.paths.js)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task("watch", function() {
  gulp.watch(config.paths.html, ["html"]);
  gulp.watch(config.paths.css, ["css"]);
  gulp.watch(config.paths.js, ["js", "lint"]);
});

gulp.task("default", ["html", "css", "js", "lint", "connect", "watch"]);
