// SCSS -> CSS kompilace
// =====================

'use strict';

module.exports = {

  options: {
      sourceMap: true
  },
  dist: {
      files: {
          'dist/css/style.css': 'src/scss/index.scss'
      }
  }

};
