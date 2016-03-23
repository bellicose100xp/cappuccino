/**
 * Created by HSO on 3/22/16.
 */
var webpack = require('webpack');
var devConfig = require('./webpack.config');

devConfig.plugins.push(new webpack.DefinePlugin({
    'process.env.NODE_ENV': '"production"'
}));

module.exports = devConfig;