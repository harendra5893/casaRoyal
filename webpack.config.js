const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { postcss } = require("postcss-preset-env");
const TerserPlugin = require("terser-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { Z_BEST_SPEED } = require("zlib");
module.exports = {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      inject: "body",
      template: "./src/index.html",
      filename: "[name].html",
    }),
    new MiniCssExtractPlugin(),
  ],

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
  // optimization: {
  //   minimize: true,
  //   minimizer: [new TerserPlugin()],
  // },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),
      "...",
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            // Lossless optimization with custom option
            // Feel free to experiment with options for better result for you
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
              // Svgo configuration here https://github.com/svg/svgo#configuration
              [
                "svgo",
                {
                  plugins: [
                    {
                      name: "preset-default",
                      params: {
                        overrides: {
                          removeViewBox: false,
                          addAttributesToSVGElement: {
                            params: {
                              attributes: [
                                { xmlns: "http://www.w3.org/2000/svg" },
                              ],
                            },
                          },
                        },
                      },
                    },
                  ],
                },
              ],
            ],
          },
        },
      }),
    ],
  },
  performance: { hints: false },
};
