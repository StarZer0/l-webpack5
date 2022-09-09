const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        // 指定产物的完整路径，否则使用方无法正确加载产物
        publicPath: `http://localhost:8081/dist/`
    },
    plugins: [
        new ModuleFederationPlugin({
            // 产物命名空间
            name: 'app1',
            // 最终生成的模块入口
            filename: 'remoteEntry.js',
            // 定义导出哪些模块
            exposes: {
                './utils': './src/utils'
            }
        })
    ],
    devServer: {
        port: 8081,
        hot: true
    }
}