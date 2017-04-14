const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  devtool: 'source-map',
  entry: {
    app: path.join(__dirname, 'src', 'app.js'),
    vendors: ['react', 'react-router', 'redux', 'react-redux', 'styled-components'],
  },
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
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('css'),
      },
      {
        test: /\.(ico|jpg|png)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
        },
      },
      {
        test: /\.md$/,
        exclude: /node_modules/,
        loader: 'json!yaml-frontmatter-loader',
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
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new ExtractTextPlugin('boostrap.css'),
    new ExtractTextPlugin('styles.css'),
  ],
};
