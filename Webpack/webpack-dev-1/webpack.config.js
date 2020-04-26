let path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let MiniCssExtractPlugin =require('mini-css-extract-plugin')
module.exports = {
  devServer: {
    //开发服务器的配置
    port: 3000,
    progress: true,
    contentBase: "./build",
    compress: true,
  },
  mode: "development", //模式  默认两种  production development
  entry: "./src/index.js",
  output: {
    filename: "bundle[hash:8].js", //打包后的文件名
    path: path.resolve(__dirname, "build"), //路径必须是一个绝对路径
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      /* minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
      }, 
      hash: true,*/
    }),
    new MiniCssExtractPlugin({
      filename:'main.css'
    })
  ],
  module: {
    //模块
    rules: [
      //规则
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
            options: {
              insert: "top",
            },
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
};
