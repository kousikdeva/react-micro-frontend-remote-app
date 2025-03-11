const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require('webpack');
const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;

module.exports = {
    entry: "./src/index.tsx",
    output: {
        publicPath: "http://localhost:3001/",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new ModuleFederationPlugin({
            name: "remoteApp",
            filename: "remoteEntry.js",
            exposes: {
                "./Button": "./src/components/Button", // Expose component
            },
            shared: {
                react: { singleton: true, },
                "react-dom": { singleton: true, },
            },
        }),
    ],
    devServer: {
        port: 3001,
        hot: true,
    },
};
