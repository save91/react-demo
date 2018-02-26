const LiveReloadPlugin = require('webpack-livereload-plugin');
const path = require('path');

module.exports = {
    entry: {
        app: './src/App.jsx'
    },
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: [/node_modules/],
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.scss$/,
                exclude: [/node_modules/],
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }, {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new LiveReloadPlugin({})
    ]
}