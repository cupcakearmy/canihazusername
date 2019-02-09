const webpack = require('webpack')
const path = require('path')
const DtsBundleWebpack = require('dts-bundle-webpack')

module.exports = {
    context: `${__dirname}`,
    target: 'node',
    entry: [
        `./index.ts`,
    ],
    output: {
        path: `${__dirname}/../lib`,
        filename: 'index.js',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    optimization: {
        minimize: true,
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            loader: 'awesome-typescript-loader'
        }, ],
    },
    plugins: [
        new DtsBundleWebpack({
            name: 'canihazusername',
            main: `./lib/index.d.ts`
        })
    ],
}