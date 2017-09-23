// vendor modules
var webpack = require('webpack');
var path = require('path');


var config = {
  entry: path.resolve(__dirname, './lib/with-stacktrace'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'with-stacktrace.js',
    library: 'with-stacktrace',
    libraryTarget: 'umd',
  },
  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015'],
      },
    }],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({ minimize: true }),
  ],
};

module.exports = config;
