'use strict';

var exec = require('child_process').execFile;
var HomePage = require('../po/HomePage.js');
var main = new HomePage();

describe('login', () => {

    beforeAll(() => {
        browser.waitForAngularEnabled(false);
    });

    beforeEach(() => {
        main.visit();
    });

    it('should show an alert with defined text for invalid-size img', () => {
        browser.sleep(1000);
    //    exec('./tests/login.exe', [browser.params.user, browser.params.pass], function(err, data) {
    //        console.log(err);
    //        console.log(data.toString());
    //    });
    console.log(browser.params.user, browser.params.pass);
       browser.sleep(5000);
    });

});
