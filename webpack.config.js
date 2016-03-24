var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist',
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        inline: true,
        contentBase: './dist',
        historyApiFallback: true
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: 'src/index.html', to: 'index.html'},
            {from: 'src/images/favicon.ico', to: 'favicon.ico'}
        ]),
        new ExtractTextPlugin("styles.css")

    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                //   loader: "style!css"
                loader: ExtractTextPlugin.extract("style", "css")
            },
            {
                test: /\.sass$/,
                exclude: /(node_modules|bower_components)/,
                // loader: "style!css!sass?indentedSyntax"
                loader: ExtractTextPlugin.extract("style", "css!sass?indentedSyntax")
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "file?name=fonts/[name].[ext]"
            },
            {
                test: /\.(woff|woff2)$/,
                exclude: /(node_modules|bower_components)/,
                loader: "url?prefix=font/&limit=5000&name=fonts/[name].[ext]"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "url?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "url?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]"
            }
        ]
    }
};

