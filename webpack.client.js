const path = require('path');

module.exports = {
    // Root file of server app:
    entry: './src/client/client.js',
    // Where to output file:
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
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