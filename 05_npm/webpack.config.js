const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        library: {
            name: '__',
            type: 'umd'
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ],
    },
    externals: ['lodash'],
    plugins: [new MiniCssExtractPlugin()]
}