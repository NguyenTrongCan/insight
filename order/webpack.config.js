const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: './App.jsx',
    vendor: ['react', 'react-dom', 'axios', 'babel-polyfill', 'react-router', 'react-router-dom', 'redux', 'react-redux', 'redux-promise', 'react-chartjs2', 'chart.js', 'file-saver'],
  },

  output: {
    path: path.resolve(__dirname, './static/'),
    filename: 'app.bundle.js',
    jsonpFunction: 'webpackJsonp',
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),
    // new webpack.optimize.UglifyJsPlugin({
    //   include: /\.min\.js$/,
    //   minimize: true,
    // }),
  ],

  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        exclude: /( node_modules)/,
        query: {
          presets: ['react', 'es2015', 'stage-2'],
        },
      },
    ],
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './static',
    hot: true,
  },

  // devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts'],
  },
};
