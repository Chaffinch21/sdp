const {series, parallel, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const clean = require('./task/clean.js');
const pug = require('./task/pug.js');
const scss = require('./task/scss.js');
const css = require('./task/css.js');
const scripts = require('./task/scripts.js');
const img = require('./task/img.js');
const font = require('./task/font.js');
const svgSprites = require('./task/svgSprites');
const favicon = require("./task/favicon.js");
const resources = require("./task/resources.js");
const json = require("./task/json.js");
// const mail = require("./task/mail.js");

const path = require('./config/path.js');
const app = require('./config/app.js');

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: path.root
    }
  })
}

const watcher = () => {
  watch(path.pug.watch, pug).on("all", browserSync.reload);
  watch(path.scss.watch, scss).on("all", browserSync.reload);
  watch(path.css.watch, css).on("all", browserSync.reload);
  watch(path.js.watch, scripts).on("all", browserSync.reload);
  watch(path.img.watch, img).on("all", browserSync.reload);
  watch(path.font.watch, font).on("all", browserSync.reload);
  watch(path.svg.watch, svgSprites).on("all", browserSync.reload);
  watch(path.favicon.watch, favicon).on("all", browserSync.reload);
  watch(path.resources.watch, resources).on("all", browserSync.reload);
  watch(path.json.watch, json).on("all", browserSync.reload);
  // watch(path.mail.watch, json).on("all", browserSync.reload);
}

const build = series(
  clean,
  parallel(pug, css, scss, scripts, img, svgSprites, font, favicon, resources, json)
);

const dev = series(
  build,
  parallel(watcher, watchFiles)
)

// watch('src/resources/**', resources);
exports.scripts = scripts;
exports.pug = pug;
exports.scss = scss;
exports.css = css;
exports.img = img;
exports.font = font;
exports.svgSprites = svgSprites;
exports.favicon = favicon;
exports.resources = resources;
exports.json = json;
// exports.mail = mail;

exports.default = app.isProd ? build : dev;