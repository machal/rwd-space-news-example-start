// Pojmenovane Grunt ulohy
// =======================

'use strict';

module.exports = {

  default: [
    'copy',
    'css',
    'js',
    'browserSync',
    'watch',
  ],

  css: [
    'sass',
    'postcss',
  ],

  js: [
    'browserify',
    'uglify',
  ]

};
