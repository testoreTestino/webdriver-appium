const {config} = require('./wdio.shared.conf')
const path = require("path");

config.port = 4273;

config.specs = [
    './test/specs/**/*.js'
]

config.capabilities = [
    {
        platformName: "ios",
        "appium:platformVersion:": "14.5",
        "appium:deviceName": "Iphone12 ",
        "appium:automationName": "UIAutomator2",
        "appium:app": path.join(process.cwd(), "app/android/open-ocean-app-internal-3.apk")
    }
]

exports.config = config
