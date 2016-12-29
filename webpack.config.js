var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ReloadPlugin = require('reload-html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  resolve: {
    root: path.join(__dirname, './src')
  },
  resolveLoader: {
    root: path.join(__dirname, './node_modules')
  },
  entry: [
    "webpack-dev-server/client?http://localhost:3000/",
    "webpack/hot/only-dev-server",
    "./src/index.js"
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: '/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: false
    }),
    new ReloadPlugin(),
    new ExtractTextPlugin("styles.css"),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }
    ]
  },
  devtool: 'inline-source-map'
};
