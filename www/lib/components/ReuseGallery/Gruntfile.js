
module.exports = function(grunt) {

  grunt.initConfig({

    clean: {
      dist: ['dist/']
    },

    jshint: {
      all: ['*.js', 'test/*.js']
    },

    less: {
      dev: {
        files: {
          "test/all.css": "test/all.less"
        }
      }
    },

    /**
     * This probably will be removed from here.
     */
    copy: {
      dist: {
        files: {
          "dist/": ["style.less", "index.hbs", "index.js"]
        }
      }
    },

    watch: {
      less: {
        files: '*.less',
        tasks: ['less:dev']
      },
      js: {
        files: "*.js",
        tasks: ['jshint']
      }
    }
  });

  // package.json is need for get it working. (it can only handle locally
  // installed dependencies)
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // register tasks
  grunt.registerTask('dev', ['less:dev']);
  grunt.registerTask('build', ['clean:dist', 'copy:dist']);

};
