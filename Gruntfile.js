'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-middleman');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      less: {
        files: 'source/assets/_pages/less/**/*.less',
        tasks: 'less'
      }
    },
    less: {
      default: {
        options: {
          paths: ['source/assets/_pages/less'],
          yuicompress: false
        },
        files: {
          'source/assets/css/_pages-compiled.css': 'source/assets/_pages/less/pages.less'
        }
      }
    },
    middleman: {
      options: {
        useBundle: true
      },
      server: {},
      build: {
        options: {
          command: "build"
        }
      }
    },
    concurrent: {
      middleman: {
        tasks: ['middleman:server', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    }
  });

  grunt.registerTask(
    'build', ['less', 'middleman:build']
  );

  grunt.registerTask('default', ['concurrent:middleman']);
};
