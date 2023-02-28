const { merge } = require('webpack-merge');
const common = require('./webpack.common');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].min.js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
        new CleanWebpackPlugin()
    ],
    devtool: 'source-map'
});