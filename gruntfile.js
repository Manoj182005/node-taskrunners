

module.exports = function (grunt) {

    

    grunt.initConfig({
      
        uglify: {
            target: {
                files: {
                    "dest/js/main.min.js": ["src/js/*.js"]
                }
            }
        },

      
        cssmin: {
            target: {
                files: [
                    {
                        expand: true,
                        cwd: "src/css",
                        src: ["*.css", "!*.min.css"],
                        dest: "dest/css",
                        ext: ".min.css"
                    }

                ]
            }
        }

    })

    // Load libraries.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Setting up Tasks.
    grunt.registerTask('default', ['uglify', 'cssmin']);
}