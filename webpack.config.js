const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  mode: "production",
  optimization: {
    minimizer: [new TerserPlugin({ /* additional options here */ })],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        loader: "babel-loader",
        options: {presets: ["@babel/env"]}
      },
      {
        test: /\.html$/,
        use: "html-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    alias: { 'react-dom': '@hot-loader/react-dom' },
  },
  output: {
    path: path.resolve(__dirname, "build/"),
    filename: "bundle.js"
  },
  /*devServer: {
    static: {
      directory: path.join(__dirname, "public/"),
    },
    port: 3000,
    hot: true
  },*/
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve("./public/index.html"),
    }),
  ]
}
