const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'modalFactory.js',
    library: 'modalFactory',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }, {
            loader: 'eslint-loader',
            options: { fix: true },
          },
        ],
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
            options: {
              modules: true,
              // importLoaders: 1
            },
          }, {
            loader: 'postcss-loader',
          }
        ],
      }
    ]
  }
}
