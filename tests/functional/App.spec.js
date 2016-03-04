import {
    wd,
    expect,
    should
} from "./setup"

describe("App", () => {

    var driver;

    const androidCapabilities = {
        browserName: '',
        'appium-version': '1.5.0',
        platformName: 'Android',
        platformVersion: '5.1.0',
        deviceName: process.env.ANDROID_EMULATOR,
        appActivity: '.MainActivity',
        appPackage: 'io.whereat.mobile'
    };

    before(() => {
        driver = wd.promiseChainRemote({ host: 'localhost', port: 4723 });
        return driver.init(androidCapabilities).setImplicitWaitTimeout(2000);
    });

    after(() => {
        driver.quit();
    });

    it("should have user's current location", () => {
        return driver
            .elementByXPath('//android.widget.LinearLayout[1]/android.widget.FrameLayout[1]/android.widget.FrameLayout[1]/android.widget.TextView[1]')
            .should.eventually.exist;
    });
});


