const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {'galleryBundle.js': './src/Gallery/main.js',
    'hobbiesBundle.js': './src/Hobbies/main.js'},
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './[name]'
  },
  module: {

    rules: [
      /*
      your other rules for JavaScript transpiling go in here
      */
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'sass-loader?sourceMap'
          ]
        })
      }

    ]
  },
  plugins: [
    new UglifyJsPlugin({
      uglifyOptions: {
        beautify: false,
        ecma: 6,
        compress: true,
        comments: false
      }
    }),
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/gridExercise/index.html',
      filename: 'grid.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/gridExercise/information.html',
      filename: 'gridInformation.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'Gallery.html',
      template: './src/Gallery/index.html',
      chunks: ['galleryBundle.js']
    }),
    new HtmlWebpackPlugin({
      filename: 'Hobbies.html',
      template: './src/Hobbies/index.html',
      chunks: ['hobbiesBundle.js']
    })
  ]
}
