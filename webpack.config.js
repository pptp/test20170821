/* eslint-disable */

var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var CopyWebpackPlugin = require('copy-webpack-plugin');

var nodeModules = {
};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });


module.exports = {
  entry: {
    server: './src/index'
  },
  target: 'node',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  node: {
    __dirname: false
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
      {
        test: /\.png$/i,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      src: path.join(__dirname, 'src')
    }
  },
  externals: nodeModules,
  plugins: [
    new webpack.DefinePlugin({
      $dirname: '__dirname',
    }),


    new CopyWebpackPlugin([
      {
        from: 'static/*'
      },
      {
        from: 'node_modules/svg-country-flags/png250px',
        to: 'static/flags'
      }
    ], {})
  ]
}