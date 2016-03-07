module.exports = function (grunt) {

    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        mochaTest: {
            options: {
                require: "babel-core/register",
                timeout: 15000
            },
            functional: {
                src: ['tests/functional/**/*.js']
            },
            unit: {
                src: ['tests/unit/.setup.android.js', 'tests/unit/**/*.js']
            }
        }
    });

    grunt.registerTask('ft', function () {
        grunt.task.run('mochaTest:functional');
    });

    grunt.registerTask('ut', function () {
        grunt.task.run('mochaTest:unit');
    });

    grunt.registerTask("default", ['ut', 'ft']);
};