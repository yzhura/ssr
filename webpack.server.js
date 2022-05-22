const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // Build bundle for node.js:
    target: 'node',
    // Root file of server app:
    entry: './src/index.js',
    // Where to output file:
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    // This library creates an externals function that ignores node_modules when bundling in Webpack.
    // https://www.npmjs.com/package/webpack-node-externals
    externals: [webpackNodeExternals()],
}

module.exports = merge(baseConfig, config);