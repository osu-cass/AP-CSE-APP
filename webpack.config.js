const path = require('path');
const webpack = require('webpack');
const AutoDllPlugin = require('autodll-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const isDev = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: ['babel-polyfill', './src/index.tsx'],
  devtool: isDev ? 'source-map' : 'none',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.[hash].js',
    publicPath: `/`
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css']
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)|(js?)$/,
        include: [
          path.resolve(__dirname, 'src'), 
          path.resolve(__dirname, 'node_modules', 'query-string')],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: isDev
          ? ["style-loader", "css-loader"]
          : ExtractTextPlugin.extract({
              use: "css-loader?minimize"
            })
      },
      {
        test: /\.less$/,
        use: isDev
          ? ["style-loader", "css-loader", "less-loader"]
          : ExtractTextPlugin.extract({
              use: ["css-loader?minimize", "less-loader"]
            })
      },
      {
        test: /\.(ttf|eot|png|svg|jpg|jpeg|woff2?|ttf)(\?.*$|$)/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/',
            publicPath: `/assets/`
          }
        }
      }
    ]
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      disableDotRule: true
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new webpack.EnvironmentPlugin({
      API_ENDPOINT: 'http://localhost:3000'
    }),
    new AutoDllPlugin({
      inject: true,
      filename: '[name].js',
      entry: {
        vendor: [
          'react',
          'react-dom',
          'react-feather',
          'react-responsive',
          'react-router',
          'react-router-dom',
          'react-scroll',
          '@osu-cass/sb-components'
        ]
      }
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html'
    })
  ]
};
