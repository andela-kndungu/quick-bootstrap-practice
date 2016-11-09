const path = require('path');

const entryPath = path.join(__dirname, 'app/index.jsx');
const assetsPath = path.join(__dirname, 'public/build');

module.exports = {
  entry: [
    entryPath
  ],
  devtool: 'eval-source-map',
  output: {
    path: assetsPath,
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: 'babel-loader',
      include: path.join(__dirname, 'app'),
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  devServer: {
    contentBase: 'public',
    inline: true
  }
};

