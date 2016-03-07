module.exports = function (grunt) {

    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        mochaTest: {
            options: {
                require: "babel-core/register"
            },
            unit: {
                src: ['test/unit/.setup.android.js', 'test/unit/**/*.js']
            },
            functional: {
                options: {
                    timeout: 30000
                },
                src: ['test/functional/**/*.js']
            }
        },
        run: {
            options: {
                wait: false,
                quiet: true
            },
            appium: {
                cmd: 'appium'
            },
            packager: {
                cmd: 'react-native',
                args: ['start']
            },
            app: {
                options: {
                    wait: true,
                    quiet: false
                },
                cmd: 'react-native',
                args: ['run-android']
            }
        }
    });

    grunt.registerTask('ft', function () {
        grunt.task.run('run:packager');
        grunt.task.run('run:app');
        grunt.task.run('run:appium');
        grunt.task.run('mochaTest:functional');
    });

    grunt.registerTask('ut', function () {
        grunt.task.run('mochaTest:unit');
    });

    grunt.registerTask("default", ['ut', 'ft']);
};