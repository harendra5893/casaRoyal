const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { postcss } = require("postcss-preset-env");
const TerserPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      template: "./src/index.html",
      filename: "[name].html",
    }),
    new MiniCssExtractPlugin(),
  ],
  mode: "development",

  entry: {
    index: "./src/js/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./"),
  },

  devServer: {
    static: "./src",
  },

  module: {
    rules: [
      {
        test: /\.(sc|c)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.(webm|jpe?g|png|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext][query]",
        },
      },
      {
        test: /\.(woff(2)?|ttf|otf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext][query]",
        },
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  performance: { hints: false },
};
