const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: ["@babel/polyfill", "./public/index.js"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js",
        publicPath: "/",
    },
    devServer: {
        historyApiFallback: true,
        port: 3001,
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        new HTMLWebpackPlugin({ template: "./public/index.html" }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.(jpg|jpeg|png|svg)/,
                use: ["file-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"],
                    },
                },
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-react",
                            "@babel/preset-env",
                            {
                                plugins: ["@babel/plugin-proposal-class-properties"],
                            },
                        ],
                    },
                },
            },
        ],
    },
};
