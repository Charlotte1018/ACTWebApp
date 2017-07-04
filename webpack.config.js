var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var copyWebpackPlugin = require('copy-webpack-plugin');
var cleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'js/[name].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            inject: false,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new copyWebpackPlugin([
            { from: 'app/views/**' },
            { from: 'app/resource/**' },
            { from: 'app/images/**' }
        ]),
        // new cleanWebpackPlugin(['build'], {

        // })
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|jpg|gif|svg|eot|woff2|woff|ttf)$/i,
                loader: "file-loader"
            }
        ]
    }
}