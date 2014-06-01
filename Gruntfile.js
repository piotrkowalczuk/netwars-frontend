/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        meta: {
            version: '0.1.0'
        },
        // Task configuration.
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            application: {
                src: [
                    'app/source/app.js',
                    'app/source/*.js',
                    'app/source/**/*.js'
                ],
                dest: 'public/dist/application.js'
            },
            vendors: {
                src: [
                    'app/vendors/jquery/dist/jquery.min.js',
                    'app/vendors/angular-bootstrap/ui-bootstrap.min.js',
                    'app/vendors/bootstrap/dist/js/bootstrap.min.js',
                    'app/vendors/momentjs/moment.js',
                    'app/vendors/Autolinker.js/dist/Autolinker.js',
                    'app/vendors/async/lib/async.js'
                ],
                dest: 'public/dist/scripts.js'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/application.min.js'
            }
        },
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                browser: true,
                reporterOutput: false,
                globals: {
                    jQuery: true
                }
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            lib_test: {
                src: ['lib/**/*.js', 'test/**/*.js']
            }
        },
        less: {
            development: {
                options: {
                    paths: [
                        "app",
                        "app/style",
                        "app/vendors/bootstrap/less"
                    ]
                },
                files: {
                    "public/css/style.css": "app/style/style.less"
                }
            },
            production: {
                options: {
                    paths: ["assets/css"],
                    cleancss: true,
                    modifyVars: {
                        imgPath: '"http://mycdn.com/path/to/images"',
                        bgColor: 'red'
                    }
                },
                files: {
                    "public/css/style.css": "app/style/style.less"
                }
            }
        },
        copy: {
            main: {
                files: [
                    {expand: true, flatten: true, src: ['app/vendors/bootstrap/dist/fonts/*'], dest: 'public/fonts/', filter: 'isFile'},
                ]
            }
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib_test: {
                files: '<%= jshint.lib_test.src %>',
                tasks: ['jshint:lib_test']
            },
            develop: {
                files: 'app/**',
                tasks: ['copy', 'less', 'concat']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task.
    grunt.registerTask('default', ['copy', 'less', 'concat']);

};
