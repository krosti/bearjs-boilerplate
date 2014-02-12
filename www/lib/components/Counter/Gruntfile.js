
module.exports = function(grunt) {

  grunt.initConfig({

    clean: {
      all: ['test/all.css']
    },

    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      all: ['*.js', 'test/*.js']
    },

    less: {
      dev: {
        files: {
          "test/all.css": "test/all.less"
        }
      }
    },

    watch: {
      less: {
        files: ['**/*.less'],
        tasks: ['less:dev']
      },
      js: {
        files: ['*.js', 'test/*.js'],
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
  grunt.registerTask('default', ['clean', 'jshint', 'less']);

};
