let Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('src/build/')
    .setPublicPath('build/')
    // .addStyleEntry('app', './assets/sass/app.scss')
    .addStyleEntry('../stylesheet', './assets/scss/app.scss')
    //.addEntry('page1', './assets/js/page1.js')
    //.addEntry('page2', './assets/js/page2.js')

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSourceMaps(!Encore.isProduction())
    .enableSassLoader()
    .enablePostCssLoader()
    .enableReactPreset()
    .disableSingleRuntimeChunk()
    // .enableSingleRuntimeChunk()
    // .createSharedEntry('common', './assets/js/common.js')
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    // .enableVersioning(Encore.isProduction())
    .enableVersioning(false)
    .copyFiles(
        [
            {from: './assets/static'}
        ]
    )
;

module.exports = Encore.getWebpackConfig();
