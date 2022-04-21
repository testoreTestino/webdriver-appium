const {config} = require('./wdio.shared.conf')
const path = require("path");


config.user= process.env.BROWSERTACK_USER;
config.user= process.env.BROWSERTACK_KEY;

config.specs = [
    './test/specs/**/*.js'
]

config.capabilities = [
    {
        platformName: "Android",
        "appium:deviceName": "Pixel 5 API 32",
        "appium:automationName": "UIAutomator2",
        "appium:app": path.join(process.cwd(), "app/android/open-ocean-app-internal-3.apk")
    }
]

exports.config = config
