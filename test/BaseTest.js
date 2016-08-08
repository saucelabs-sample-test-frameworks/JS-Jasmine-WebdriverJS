'use strict';
// var test = require('selenium-webdriver/testing');
var DriverFactory = require('../lib/DriverFactory'),
    driverFactory;
global.testTimeout = 30000;

// test.beforeEach(function() {
//     this.timeout(global.testTimeout);
//     driverFactory = new DriverFactory();
//     global.driver = driverFactory.driver;
// });
//
// test.afterEach(function() {
//     this.timeout(global.testTimeout);
//     driverFactory.quit();
// });




beforeEach(function () {
    driverFactory = new DriverFactory();
    global.driver = driverFactory.driver;

    driver.getSession().then(function(sessionid) {
        driver.sessionID = sessionid.id_;
    });

});

afterEach(function () {
    var results = jasmine.getEnv().currentSpec.results_.failedCount;
    saucelabs.updateJob(driver.sessionID, {
        passed: results === 0
    }, function () {});
    this.timeout(global.testTimeout);
    driverFactory.quit();
});
