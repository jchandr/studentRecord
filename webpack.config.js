const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // the main entry of our app
  entry: ['./src/main.js'],
  // output configuration
  output: {
    path: path.resolve(__dirname) + '/build/',
    publicPath: 'build/',
    filename: 'app.bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'student-record',
    template: './index.html'
  })],
  module: {
    loaders: [
      // process *.vue files using vue-loader
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // process *.js files using babel-loader
      // the exclude pattern is important so that we don't
      // apply babel transform to all the dependencies!
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
