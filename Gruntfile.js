'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    htmlmin: {
      main: {
        options: {
          collapseWhitespace: true,
        },
        files: {
          'static/index.html': 'assets/html/index.html',
        },
      },
    },
    sass: {
      options: {
        sourcemap: 'none',
        style: 'compressed',
      },
      main: {
        src: 'assets/scss/main.scss',
        dest: 'static/css/main.min.css',
      },
    },
    uglify: {
      main: {
        options: {
          wrap: true,
        },
        src: [
          'assets/js/util.js',
          'assets/js/game.js',
          'assets/js/space.js',
          'assets/js/io.js',
          'assets/js/app.js',
        ],
        dest: 'static/js/main.min.js',
      },
    },
    watch: {
      htmlmin: {
        files: ['assets/html/*.html'],
        tasks: ['htmlmin'],
      },
      sass: {
        files: ['assets/scss/*.scss'],
        tasks: ['sass'],
      },
      uglify: {
        files: ['assets/js/*.js'],
        tasks: ['uglify'],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['htmlmin', 'sass', 'uglify']);
  grunt.registerTask('dev', ['default', 'watch']);
};