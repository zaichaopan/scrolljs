var path = require('path');

module.exports = {
    entry: {
        app: './demo/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'demo'),
        filename: 'index.build.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}
