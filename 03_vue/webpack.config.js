const path = require('path')

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");

const mode = 'production'

module.exports = {
    mode,
    entry: './src/index.js',
    resolve: {
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader', options: {
                        presets: ['@babel/preset-typescript'],
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            },
            {
                test: /\.css$/,
                use: [mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, './index.html') }),
    ]
}