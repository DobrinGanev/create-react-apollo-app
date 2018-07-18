/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: ['webpack/hot/poll?1000','./template/client/index'],
    mode: 'development',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devServer: {
        host: 'localhost',
        port: 3001,
        historyApiFallback: true,
        hot: true
     },
    module: {
        rules: [
            {
                exclude: /node_modules|packages/,
                test: /\.js$/,
                use: 'babel-loader',
            },
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     use: ['eslint-loader']
            //   },
              {
                test: /\.(js|jsx)$/,
                include: path.join(__dirname, './template/client/index'),
                loader: require.resolve('babel-loader'),
                options: {
                  // This is a feature of `babel-loader` for webpack (not Babel itself).
                  // It enables caching results in ./node_modules/.cache/babel-loader/
                  // directory for faster rebuilds.
                  cacheDirectory: true,
                  plugins: ['react-hot-loader/babel']
                },
              }
          
        ],
    },
<<<<<<< HEAD
    plugins: [new HtmlWebpackPlugin(), new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()],
=======
    plugins: [
        new HtmlWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()]
>>>>>>> 234f46a7f2c94815f050f4914ffc5bc798cf3d17
}
