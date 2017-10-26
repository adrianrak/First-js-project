module.exports = function(grunt) {
    
      grunt.initConfig({
        jshint: {
          all: ['js/*.js']
        },
        sass: {
            options: {
              sourceMap: true
            },
            dist: {
              files: {
                'css/style.css': 'sass/style.scss'
              }
            }
          },
        watch: {
            scripts: {
                files: ['sass/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            }
        },   
          browserSync: {
            bsFiles: {
                src : 'css/*.css'
            },
            options: {
                server: {
                    baseDir: "./"
                }
            }
        }
      });
    
      grunt.loadNpmTasks('grunt-contrib-jshint');
      grunt.loadNpmTasks('grunt-sass');
      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.loadNpmTasks('grunt-browser-sync');
    
      grunt.registerTask('default', ['jshint', 'sass','watch', 'browserSync']);
    
    };