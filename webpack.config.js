const path = require('path')
const htmlwebpackPlugin = require('html-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  mode: isProduction ? 'production' : 'development',
  devtool: isProduction ? 'source-map': 'eval-source-map' ,
  entry: path.resolve(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public' , 'index.html')
  },
  plugins: [
    new htmlwebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.tsx',  '.ts']
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader','sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  }
}