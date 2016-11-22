var webpack = require( 'webpack' );
//require( 'babel-polyfill' );

module.exports = {
  context: __dirname + '/_src',
  entry: {
    Main: './js/App.js'
  },
  output: {
    path: __dirname + '/js',
    filename: '[name].js'
  },
  devtool: 'source-map',
  plugins: [
    new webpack.BannerPlugin('project: es2015 scaffolding\nauthor: pdw'),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
