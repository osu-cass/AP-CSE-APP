const path = require('path');
const webpack = require('webpack');
const AutoDllPlugin = require('autodll-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


// const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = (env) => {
  let prod = (env && env === "prod") ? true : false;
  return {
  mode: prod ? 'production' : 'development',
  entry: ['./src/index.tsx'],
  devtool: prod ? 'none' : 'source-map',
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
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          prod ? {
            loader: MiniCssExtractPlugin.loader
          } : "style-loader",
          "css-loader"
        ]
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
    new MiniCssExtractPlugin({      
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
      }),
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
}
};
