const { dirname } = require("path");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { postcss } = require("postcss-preset-env");
const TerserPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {

    plugins: [
        new HtmlWebpackPlugin({
          inject: 'body',
          template: './src/index.html',
          filename: 'index.html',
        }),
        // new HtmlWebpackLiveReload(),
        new MiniCssExtractPlugin(),
    ],
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/js/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  devServer: {
    static: "./src",
  },

  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader", "postcss-loader"],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: 'images/[hash][ext][query]'
        }
      },
      {
        test: /\.(woff(2)?|ttf|otf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
        generator: {
          filename: 'fonts/[name][ext][query]'
        }
      },
      {
        test:/\.html$/,
        use: [
          'html-loader'
        ]
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  
};
