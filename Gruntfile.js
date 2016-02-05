/*

Ukoly nad assety: kombilace CSS, JS…
====================================

1) Kopirovani souboru
2) CSS: LESS, PostCSS
3) JS: spojeni do jednoho a minifikace
4) Workflow: BrowserSync, watch
5) Alias tasky: css, js, default

*/

module.exports = function(grunt) {
  "use strict";

  // zjistujeme cas behu tasku
  require('time-grunt')(grunt);

  // jit-grunt pro zrychleni nacitani gruntu a behu tasku
  require('jit-grunt')(grunt);


  // Nastaveni tasku
  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    // 1) Kopirovani souboru
    // ---------------------    

    copy: {
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
      },
    },

    // 2) CSS: LESS, PostCSS
    // ---------------------

    // LESS -> CSS

    less: {
      default: {
        files: {
          'dist/css/style.css': 'src/less/index.less'
        },
        options: {
          sourceMap: true,
          sourceMapFilename: 'dist/css/style.css.map',
          sourceMapURL: 'style.css.map',
          sourceMapRootpath: './'
        }
      }
    },


    // PostCSS

    postcss: {
      options: {
        map: true,
        processors: [
          require('pixrem')({rootValue: 16}), // rem -> px fallback
          require('autoprefixer')({browsers: ['last 3 versions', 'ios 6', 'ie 7', 'ie 8', 'ie 9']}), // pridani prefixu
        ]
      },
      dist: {
        src: 'dist/css/style.css'
      }
    },    


    // CSSmin

    cssmin: {
      default: {
        files: {
          'dist/css/style.min.css': 'dist/css/style.css'
        }
      }  
    },

    // 3) JS: spojeni do jednoho a minifikace
    // --------------------------------------

    // Spojeni JS do jednoho

    browserify : {
      main : {
        files : { 'dist/js/script.js' : ['src/js/index.js'] }
      },
      options: {
        transform: ['debowerify'],
        debug: true
      }
    },

    // Uglify - minifikace JS

    uglify: {
      script: {
          src: 'dist/js/script.js',
          dest: 'dist/js/script.min.js'
      }
    },

    // 4) Workflow: BrowserSync, watch
    // --------------------------------

    // browserSync

    // Spusti server na http://localhost:3000/, externe pak na
    // adrese, kterou zobrazi pri startu.
    // Injectuje zmeny v bsFiles bez nutnosti reloadu.
    // Synchronizuje zobrazeni napric zarizenimi.

    browserSync: {
      dev: {
          bsFiles: {
              src : [
                'dist/css/*.css'
              ]
          },
          options: {
              watchTask: true,
              proxy: 'sites.localhost'
          }
      }
    },

    // watch
    // -----

    // Sleduje zmeny v LESS a JS souborech a spousti souvisejici tasky.

    watch: {
      less: {
        files: 'src/less/**/*.less',
        tasks: ['css']
      },
      js: {
        files: 'src/js/**/*.js',
        tasks: ['js']
      }
    },

  });


  // 5) Alias tasky
  // ==============

  grunt.registerTask('css', ['less', 'postcss', 'cssmin']);
  grunt.registerTask('js', ['browserify', 'uglify']);
  grunt.registerTask('default', ['copy', 'css', 'js', 'browserSync', 'watch']);

};
