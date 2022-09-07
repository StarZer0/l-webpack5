const path = require('path')

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = 'development'

module.exports = {
    mode,
    entry: './src/index.jsx',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    }
                }
            },
            {
                test: /\.css$/,
                use: [mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, './index.html') })
    ]
}