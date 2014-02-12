
module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      all: ['*.js', 'app/**/*.js', 'lib/**/*.js']
    },

    less: {
      options: {
        paths: ["assets/css"]
      },
      development: {
        files: {
          "lib/assets/css/application.css": "lib/assets/less/application.less"
        }
      },
      production: {
        options: {
          yuicompress: true
        },
        files: {
          "lib/assets/css/application.css": "lib/assets/less/application.less"
        }
      }
    },

    // Watch task.
    watch: {
      // Keep an eye on those stylesheets.
      styles: {
        // The path 'less/**/*.less' will expand to match every less file in
        // the less directory.
        files: [ 'lib/assets/less/**/*.less', 'app/views/**/*.hbs'],
        // The tasks to run
        tasks: [ 'less:development' ]
      }
    },

    ezless : {
        options : {
            lessPath : "./lib/assets/less",
            cssPath : "./lib/assets/css",
            verbose: true,
            compress: true
        },
        less : [
            "application.less"
        ],
        css : [
            "application.css"
        ]
    },

    connect: {
      site: {
        options: {
          keepalive: true,
          port: 9000,
          base: '.'
        }
      }
    }

  });

  // package.json is need for get it working. (it can only handle locally
  // installed dependencies)
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-easy-less');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // register tasks
  grunt.registerTask('default', ['less:development']);

};
