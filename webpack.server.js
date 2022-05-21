const path = require('path');

module.exports = {
    // Build bundle for node.js:
    target: 'node',
    // Root file of server app:
    entry: './src/index.js',
    // Where to output file:
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    // Run bable on every file
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', {targets: {browsers: ['last 2 versions']}}]
                    ]
                }
            }
        ]
    }
}