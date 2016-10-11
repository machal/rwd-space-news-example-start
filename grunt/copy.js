// Kopirovani souboru
// ==================

'use strict';

module.exports = {

  fancybox: {
    files: [
      {
        expand: true,
        cwd: 'node_modules/fancybox/dist/css/',
        src: ['jquery.fancybox.css'],
        dest: 'src/less/lib/',
        rename: function(dest, src) {
          return dest + src.replace(/\.css$/, ".less");
        }
      },
      {
        expand: true,
        cwd: 'node_modules/fancybox/dist/img/',
        src: ['*.*'],
        dest: 'src/img/'
      },
    ]
  }

};
