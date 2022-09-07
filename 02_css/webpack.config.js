const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const mode = 'production'

module.exports = {
    mode,
    entry: './src/index.js',
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
                test: /\.css$/,
                use: [mode === 'production' ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin()
    ]
}