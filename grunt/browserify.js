// Spojeni JS do jednoho
// =====================

'use strict';

module.exports = {

  main : {
    files : { 'dist/js/script.js' : ['src/js/index.js'] }
  },

  options: {
    transform: ['debowerify'],
    debug: true
  }

};
