var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('webpack');

gulp.task("webpack", function(callback) {
  // run webpack
  webpack({
    cache: true,
    progress: false,
    devtool: 'sourcemap',
    output: {
      path: './dist',
      publicPath: './dist',
      filename: '[name].js',
      chunkFilename: 'chunk.[chunkhash].js',
      library: 'jsPDF',
      libraryTarget: 'umd'
    },
    entry: {
      'jspdf-bundle': './jspdf-bundle'
    },
    module: {},
    resolve: {},
    plugins: []
  }, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      // output options
    }));
    callback();
  });
});