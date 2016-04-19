var webpack = require('webpack');
var baseConfig = require('./webpack.base.config');

var devConfig = Object.assign({}, baseConfig, {
    devServer: {
        inline: true,
        contentBase: './dist',
        historyApiFallback: true
    },
    devtool: "#inline-source-map"
});

module.exports = devConfig;