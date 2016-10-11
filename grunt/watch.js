// Watch
// =====

// Sleduje zmeny v LESS (SCSS) a JS souborech
// a spousti souvisejici tasky.

'use strict';

module.exports = {

  less: {
    files: 'src/less/**/*.less',
    tasks: ['css']
  },

  sass: {
    files: 'src/scss/**/*.scss',
    tasks: ['css']
  },

  js: {
    files: 'src/js/**/*.js',
    tasks: ['js']
  }

};
