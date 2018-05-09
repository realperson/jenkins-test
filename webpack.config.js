const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
  return path.resolve(__dirname, dir);
}

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', //html模板路径，相对于根目录
      filename: './index.html', //生成的html存放路径，相对于output.path
      inject: 'body', //js插入的位置，true/'head'/'body'/false
      hash: false, //为静态资源生成hash值
      chunks: ['main']//需要引入的chunk，不配置就会引入所有页面的资源
    })
  ]
};
