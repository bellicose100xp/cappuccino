var webpack = require('webpack');
var baseConfig = require('./webpack.base.config');

baseConfig.plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
}));

module.exports = baseConfig;