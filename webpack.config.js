var path = require('path');

module.exports = {
    entry: {
        app: './demo/example6.js'
    },
    output: {
        path: path.resolve(__dirname, 'demo'),
        filename: 'example6.build.js'
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
