const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const path = require('path');
const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
    mode: 'development',
    entry: {
        app: resolvePath('./src/index.ts')
    },
    resolve: {
        // 指定自动解析哪些后缀的文件，导入时不必写后缀
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-typescript'],
                        }
                    }
                ]
            }
        ]
    },
    plugins: [new ESLintWebpackPlugin({
        extensions: ['.ts', '.js']
    })]
}