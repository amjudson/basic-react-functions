import * as constants from './server/serverConstants.js';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const GLOBALS = {
  'process.env.API_HOST': JSON.stringify('http://localhost/PeopleTracker')
};

module.exports = {
  mode: 'development',
  watch: true,
  devtool: 'source-map',
  entry: [
    'eventsource-polyfill',
    path.join(__dirname, 'src', 'index.js') // primary JS entry point
  ],
  context: path.resolve(__dirname),
  output: {
    // save the bundle here
    path: path.join(__dirname, 'dist'),
    //publicPath: path.resolve(__dirname, '/'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'src'),
    hot: true,
    port: constants.port
  },
  node: {
    fs: "empty"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin(GLOBALS),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'assets/'),
      localcss: path.resolve(__dirname, 'src/css/'),
      objects: path.resolve(__dirname, 'src/objects/')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/, // transform all .js files
        exclude: /(node_modules)/, // except for node_modules
        loader: 'babel-loader', // apply the bable-loader to compile the files
        query: {
          presets: ['@babel/react', '@babel/env'] // load the react, es2015 babel settings
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.(scss)$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.less$/,
        exclude: /(node_modules)/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      }
    ]
  }
};
