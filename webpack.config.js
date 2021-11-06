'use strict';

var nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'web',
  mode: 'production',
  entry: './src/index.ts',
  output: {
    filename: 'index.js',
    library: 'EstimateJS',
    globalObject: 'this',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  externals: [nodeExternals()],
};
