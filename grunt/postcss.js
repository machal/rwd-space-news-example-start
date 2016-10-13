// PostCSS: post-processing CSS
// ============================

// Minifikace, doplnovani syntaxe…

'use strict';

module.exports = {

  default: {
    options: {
      map: true,
      processors: [
        // rem -> px fallback:
        require('pixrem')({rootValue: 16}),
        // pridani vendor prefixu
        require('autoprefixer')({browsers: ['last 3 versions', 'ios 6', 'ie 7', 'ie 8', 'ie 9']}),
        // media queries z px do em
        require('postcss-em-media-query')({ }),
        //  minifikace CSS
        require('cssnano')()
      ]
    },
    files: {
      'dist/css/style.min.css':'dist/css/style.css'
    }
  }

};
