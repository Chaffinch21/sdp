const {src, dest} = require('gulp');

const path = require("../config/path.js");

const mail = () => {
  return src(path.mail.src)
  .pipe(dest(path.mail.dest));
}

module.exports = mail;