/*!
 * Mafalda do Canto website
 *
 * Licensed under MIT (https://github.com/EnduranceCode/mafaldadocanto-website/blob/master/LICENSE)
 *
 * Copyright 2023 Ricardo do Canto
 */

const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: { index: path.resolve(__dirname, 'src', 'js', 'script.js') },

  output: { clean: true, filename: 'js/script.js', path: path.resolve(__dirname, 'dist') },

  plugins: [
    new Dotenv({
      systemvars: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: 'css/style.css',
    }),
    new CopyPlugin({
      patterns: [{ from: 'src/img', to: 'img/' }],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(gif|jpg|jpeg|png|svg|webp)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name][ext]',
        },
      },
      {
        test: /\.(s[ac]|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader'],
      },
    ],
  },

  devtool: 'source-map',

  devServer: {
    historyApiFallback: true,
    open: true,
  },
};
