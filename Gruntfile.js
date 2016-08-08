'use strict';

module.exports = function (grunt) {
    // configure tasks
    grunt.initConfig({
      shell: {
        runTests: {
            command: function(platform, browser, version) {
              return 'PLATFORM='+platform+' BROWSER='+browser+' VERSION='+version+' ./node_modules/.bin/jasmine-node test/sampleSpec.js'
            }
        }
      },

      parallel: {
        assets: {
            options: {
                grunt: true
            },
            tasks: ['run_Win8_firefox_latest', 'run_Linux_chrome_45', 'run_Windows10_edge', 'run_Windows7_ie_11']
        }
      }
    });

    // load tasks
    grunt.loadNpmTasks('grunt-parallel');
    grunt.loadNpmTasks('grunt-shell');

    // register tasks
    grunt.registerTask('default', ['parallel']);

    grunt.registerTask('run_Win8_firefox_latest', ['shell:runTests:"Windows 8":firefox:latest']);
    grunt.registerTask('run_Linux_chrome_45', ['shell:runTests:Linux:chrome:45']);
    grunt.registerTask('run_Windows10_edge', ['shell:runTests:"Windows 10":MicrosoftEdge:20.10240']);
    grunt.registerTask('run_Windows7_ie_11', ['shell:runTests:"Windows 7":"internet explorer":11']);
};