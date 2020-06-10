const path = require('path');

module.exports = {
  entry: './main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/build',
    compress: true,
    port: 9001,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /.svelte$/,
        loader: 'svelte-loader',
        options: { hotReload: true },
      }
    ],
  },
};