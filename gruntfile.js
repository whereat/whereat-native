module.exports = function (grunt) {

    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        mochaTest: {
            options: {
                require: "babel-core/register"
            },
            unit: {
                src: ['tests/unit/.setup.android.js', 'tests/unit/**/*.js']
            },
            functional: {
                options: {
                    timeout: 60000
                },
                src: ['tests/functional/**/*.js']
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
        grunt.task.run('run:app');
        grunt.task.run('run:appium');
        grunt.task.run('mochaTest:functional');
    });

    grunt.registerTask('ut', function () {
        grunt.task.run('mochaTest:unit');
    });

    grunt.registerTask("default", ['ut', 'ft']);
};