const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const PROD = process.env.NODE_ENV !== 'production';
const src = __dirname + '/src';
const dist = __dirname + '/dist';

module.exports = {
  entry: src + "/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        },
      },
      {
        test: /\.(scss|sass|css)$/,
        exclude: /node_modules/,
        loaders: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1
            }
          },
        'sass-loader',
        ]
      },
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        use: {
          loader: 'html-loader',
          options: { minimize: true }
        }
      }

    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: src + "/index.html",
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: PROD ? '[name].css' : '[name].[hash].css',
      chunkFilename: PROD ? '[id].css' : '[id].[hash].css',
    })
  ],
  devServer: {
    contentBase: dist,
    hot: true,
    port: 5000
  }
};