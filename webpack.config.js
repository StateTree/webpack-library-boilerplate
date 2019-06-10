const webpack = require("webpack");
const path = require("path");

const paths = {
    context: path.join(__dirname, "./src/"),
    output: path.join(__dirname, "./dist/"),
    entry: {
        app:"./index.js"
    }
};



const config = {
    mode: 'development',
    context: paths.context,
    entry: paths.entry,
    output: {
        path: paths.output,
        filename: "[name].js",
        library: libraryName,
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './src',
        hot: true,
        compress: true,
        port: 3001
    },
};

module.exports = config;


