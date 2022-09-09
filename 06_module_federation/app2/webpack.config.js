const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    plugins: [
        new ModuleFederationPlugin({
            remotes: {
                RemoteApp: "app1@http://localhost:8081/dist/remoteEntry.js"
            }
        }),
        new HtmlWebpackPlugin()
    ],
    devServer: {
        port: 8082,
        hot: true,
        open: true
    }
}