const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(webp|svg)$/,
        use: [
          {
            "file-loader"
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            "style-loader",
            "css-loader",
            "sass-loader"
          }
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "[name].html",
      filename: "[name].html"
    }),
    new MiniCssExtractPlugin({
      filename: "cs/[name].css",
      chunkFilename: "cs/[id].css"
    }),
  ]
}
