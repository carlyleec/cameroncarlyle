const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: path.join(__dirname, 'src', 'app.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: /src/,
        loader: 'babel-loader',
      },
      {
        test: /\.json$/,
        include: /src/,
        exclude: /node_modules/,
        loader: 'json-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('css?sourceMap!sass?sourceMap'),
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    inline: true,
    stats: 'errors-only',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html')
    }),
    new ExtractTextPlugin('boostrap.css'),
  ],
};


