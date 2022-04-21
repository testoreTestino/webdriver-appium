const {config} = require('./wdio.shared.conf')
require('dotenv').config()

config.user= process.env.BROWSERSTACK_USER;
config.key= process.env.BROWSERSTACK_KEY;

config.specs = [
    './test/specs/**/*.js'
]

config.capabilities = [
    {
        platformName: "Android",
        "appium:deviceName": "Google Pixel 3",
        "appium:automationName": "UIAutomator2",
        "appium:app": "bs://34c7c9375ba481ed66fa6a7cdbaf3abe2d51a52e",
        "appium:autoGrantPermissions": true
    }

]
config.services = ['browserstack'];

exports.config = config
