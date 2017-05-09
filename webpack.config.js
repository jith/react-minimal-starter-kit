var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ReloadPlugin = require('reload-html-webpack-plugin');


module.exports = {
  resolve: {
    modules: [
      path.join(__dirname, "./src"),
      "./node_modules"
    ]
  },
  entry: [
    'react-hot-loader/patch',
    "webpack-dev-server/client?http://localhost:3000/",
    "webpack/hot/only-dev-server",
    "./src/dev.index.js"
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: true
    }),
    new ReloadPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devtool: 'inline-source-map'
};
