var webpack = require('webpack');
var path = require('path');

module.exports = {
    // devtool: 'inline-source-map',
    entry: './src',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};