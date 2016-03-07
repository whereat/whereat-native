import {
    wd,
    expect,
    should,
    androidCapabilities
} from "./setup"

describe("App", () => {
    var driver;

    before(() => {
        driver = wd.promiseChainRemote({ host: 'localhost', port: 4723 });
        return driver.init(androidCapabilities).setImplicitWaitTimeout(70000);
    });

    after(() => {
        driver.quit();
    });

    it("should have user's current location", () => {
        return driver
            .elementByXPath('//android.widget.TextView[1]')
            .text().should.become('LATITUDE: 42.64565\n')

            .elementByXPath('//android.widget.TextView[2]')
            .text().should.become('LONGITUDE: -73.754199\n')

            .elementByXPath('//android.widget.TextView[3]')
            .text().should.become('LAST UPDATED TIME: 1455227589')
    });
});


