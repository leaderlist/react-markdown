const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ESlintPlugin = require('eslint-webpack-plugin')
const MiniCssExtract = require('mini-css-extract-plugin')
const CSSMinimizerPlugin = require('css-minimizer-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.tsx',
  devtool: process.env.NODE_ENV === 'development' ? 'cheap-module-source-map' : false,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(css|less)$/,
        use: [
          {
            loader: MiniCssExtract.loader
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnables: true
              }
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        loader: 'file-loader',
        options: {
          name: '[name]_[hash:6].[ext]',
          outputPath: 'static/image',
          publicPath: 'static/image'
        }
      },
      {
        test: /\.(woff|woff2|ttf|eot|otf)$/,
        loader: 'file-loder',
        options: {
          name: '[name]_[hash:6].[ext]',
          outputPath: 'static/font',
          publicPath: 'static/font'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react-narkdown',
      template: 'public/index.html'
    }),
    new CleanWebpackPlugin(),
    new ESlintPlugin(),
    new MiniCssExtract({
      filename: 'static/css/[name]_[hash:6].css',
      chunkFilename: 'static/css/[id].css'
    }),
    new CSSMinimizerPlugin(),
    new webpack.SourceMapDevToolPlugin({

    })
  ],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    hot: true,
    historyApiFallback: true,
    compress: true,
    open: true
  },
  performance: {
    hints: 'warning', // ??????
    maxAssetSize: 30000000, // ????????????????????????????????????
    maxEntrypointSize: 50000000, // ????????????????????????????????????
    assetFilter: function(assetFilename) {
    // ????????????????????????????????????
    return assetFilename.endsWith('.css') || assetFilename.endsWith('.js')
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src/')
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  optimization: {
    splitChunks: {
      minSize: 30,
      cacheGroups: {
          default: {
              name: 'common',
              chunks: 'initial',
              minChunks: 3, //???????????????2?????????????????????
              priority: -20
          },
          vendors: {  //???????????????????????????npm|yarn???????????????
            test: /[\\/]node_modules[\\/]/,
              name: 'vendor',
              chunks: 'initial',
              priority: -10
          }
      }
    }
  }

}