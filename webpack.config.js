var path = require('path');
var webpack = require('webpack');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {

  devtool: NODE_ENV == 'development'? 'eval': null,

  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
    library: 'app'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({ // export config variable into project codebase. This variable will be accessable into code
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel?optional[]=runtime'],
      include: path.join(__dirname, 'src')
    }]
  }
};


if (NODE_ENV === 'production') {
  // for production mode we adding uglify for our js file
  module.exports.plugins.push(
      // adding UglifyJs and minimizer
      new webpack.optimize.UglifyJsPlugin({
        warnings: false,
        drop_console: true,
        unsafe: true
      })
  )
}
