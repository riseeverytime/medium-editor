/* global module, process */

module.exports = function (config) {
    config.set({

        browserStack: {
            apiClientEndpoint: 'https://api.browserstack.com'
        },

        customLaunchers: {
            WIN81Chrome: {
                'base': 'BrowserStack',
                'os': 'Windows',
                'os_version': '8.1',
                'browser': 'chrome'
            },
            WIN81Firefox: {
                'base': 'BrowserStack',
                'os': 'Windows',
                'os_version': '8.1',
                'browser': 'firefox'
            },
            WIN81Edge: {
                'base': 'BrowserStack',
                'os': 'Windows',
                'os_version': '8.1',
                'browser': 'edge'
            },
            WIN10Chrome: {
                'base': 'BrowserStack',
                'os': 'Windows',
                'os_version': '10',
                'browser': 'chrome'
            },
            WIN10Firefox: {
                'base': 'BrowserStack',
                'os': 'Windows',
                'os_version': '10',
                'browser': 'firefox'
            },
            WIN10Edge: {
                'base': 'BrowserStack',
                'os': 'Windows',
                'os_version': '10',
                'browser': 'edge'
            },
            OSXYosemiteSafari: {
                'base': 'BrowserStack',
                'os': 'OS X',
                'os_version': 'Yosemite',
                'browser': 'safari'
            },
            OSXElCapitanChrome: {
                'base': 'BrowserStack',
                'os': 'OS X',
                'os_version': 'El Capitan',
                'browser': 'chrome'
            },
            OSXElCapitanSafari: {
                'base': 'BrowserStack',
                'os': 'OS X',
                'os_version': 'El Capitan',
                'browser': 'safari'
            },
            OSXElCapitanFirefox: {
                'base': 'BrowserStack',
                'os': 'OS X',
                'os_version': 'El Capitan',
                'browser': 'firefox'
            }
        },

        basePath: '',
        frameworks: ['jasmine'],

        files: [
            'node_modules/lodash/index.js',
            'spec/vendor/jasmine-jsreporter.js',
            'spec/vendor/jasmine-jsreporter-script.js',
            'src/js/polyfills.js',
            'src/js/globals.js',
            'src/js/util.js',
            'src/js/extension.js',
            'src/js/selection.js',
            'src/js/events.js',
            'src/js/extensions/button.js',
            'src/js/defaults/buttons.js',
            'src/js/extensions/form.js',
            'src/js/extensions/anchor.js',
            'src/js/extensions/anchor-preview.js',
            'src/js/extensions/auto-link.js',
            'src/js/extensions/file-dragging.js',
            'src/js/extensions/keyboard-commands.js',
            'src/js/extensions/fontname.js',
            'src/js/extensions/fontsize.js',
            'src/js/extensions/paste.js',
            'src/js/extensions/placeholder.js',
            'src/js/extensions/toolbar.js',
            'src/js/extensions/deprecated/image-dragging.js',
            'src/js/core.js',
            'src/js/defaults/options.js',
            'src/js/version.js',
            'spec/helpers/util.js',
            'spec/*.spec.js'
        ],

        exclude: [
            'src/js/extensions/deprecated/*'
        ],

        preprocessors: {
        },

        plugins: [
            'karma-jasmine',
            'karma-spec-reporter',
            'karma-jasmine-html-reporter',
            'karma-browserstack-launcher',
            'karma-phantomjs-launcher',
            'karma-chrome-launcher',
            'karma-coverage',
            'karma-coveralls'
        ],

        reporters: ['coverage', 'coveralls', 'progress', 'BrowserStack', 'dots', 'spec', 'kjhtml'],

        coverageReporter: {
            type: 'lcov',
            dir: 'coverage/'
        },

        port: 9876,

        logLevel: config.LOG_INFO,
        colors: true,

        autoWatch: false,

        // browsers: ['WIN81Chrome', 'WIN81Edge', 'WIN81Firefox', 'WIN10Chrome', 'WIN10Edge', 'WIN10Firefox', 'OSXYosemiteSafari', 'OSXElCapitanChrome', 'OSXElCapitanFirefox', 'OSXElCapitanSafari'],
        browsers: ['WIN10Chrome', 'WIN81Chrome', 'OSXElCapitanChrome'],

        client: {
            clearContext: false
        },

        singleRun: true,

        concurrency: Infinity
    });
};