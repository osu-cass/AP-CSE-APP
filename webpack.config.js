const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  mode: isDev ? 'development' : 'production',
  entry: './src/index.tsx',
  devtool: "cheap-module-eval-source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.[hash].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css']
  },
  module: {
    rules: [
      {
        test: /\.(tsx?)|(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|woff2?|ttf)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'assets/',
            publicPath: '/assets/'
          }
        }
      }
    ],
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
    })
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ] 
};
