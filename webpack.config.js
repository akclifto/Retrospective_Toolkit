const path = require('path');

// entry point (app.js) -> output final bundle file
module.exports = {
    mode : 'development',
    entry: './src/main/ui/app.js',
    output : {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    // loader, test rule using ' /.sometext$/ '  is called 'regular expression'
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        } ]
    },
    devtool: 'eval-cheap-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};

