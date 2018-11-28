module.exports = {
  mode: 'development',
  context: `${__dirname}/src`,
  entry: './index',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};
