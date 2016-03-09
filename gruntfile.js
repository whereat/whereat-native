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
            androidFunctional: {
                options: {
                    timeout: 30000
                },
                src: ['test/functional/.setup.js', 'test/functional/android/**/*.js']
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
            android: {
                options: {
                    wait: true,
                    quiet: false
                },
                cmd: 'react-native',
                args: ['run-android']
            }
        }
    });

    grunt.registerTask('android-functional-test', function () {
        grunt.task.run('run:android');
        grunt.task.run('run:appium');
        grunt.task.run('mochaTest:androidFunctional');
    });

    grunt.registerTask('unit-test', function () {
        grunt.task.run('mochaTest:unit');
    });

    grunt.registerTask("default", function () {
        grunt.task.run('run:android');
        grunt.task.run('run:appium');
        grunt.task.run('mochaTest:unit');
        grunt.task.run('mochaTest:androidFunctional');
    });

    grunt.registerTask("ut", ['unit-test']);
    grunt.registerTask("aft", ['android-functional-test']);
};