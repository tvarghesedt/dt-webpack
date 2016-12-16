var webpack = require('webpack');
var path = require('path');
var AssetsPlugin = require('assets-webpack-plugin');
var ModernizrWebpackPlugin = require('modernizr-webpack-plugin');
//var assetsPluginInstance = new AssetsPlugin({includeManifest: 'manifest'})
module.exports = {
entry: {
a: './app/app.js',
// b: './app/vendor',
// c: './app/modules',
},
output: {
filename: '[name].js',
//path: path.join(__dirname, "/wp-content/themes/bridge-child/js", "[hash]"),
path: __dirname + '/wp-content/themes/bridge-child/js',
//publicPath: 'https://www.daytranslations.com/wp-content/themes/bridge-child/js/'  // production
publicPath: 'wp-content/themes/bridge-child/js/' // dev local
//publicPath: 'https://www.daytranslations.com/wp-content/themes/bridge-child/js/[hash]/',
//chunkFilename: "[id].bundle.js"
},
    module: {
        loaders: [
        { test: /[\\\/]app[\\\/]modules[\\\/]plugins\.js$/,
            loader: "imports?this=>window!exports?window.Modernizr" }
    	]
    },
plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery"
    }),
    new ModernizrWebpackPlugin(),
    //new webpack.optimize.CommonsChunkPlugin("init.js")
    //,
    // function() {
    //   this.plugin("done", function(stats) {
    //     require("fs").writeFileSync(
    //       path.join(__dirname, "...", "stats.json"),
    //       JSON.stringify(stats.toJson()));
    //   });
    // }
//    assetsPluginInstance
   // ,
    new webpack.optimize.UglifyJsPlugin({
     compress: {
        warnings: false
      },
      sourceMap: false,
      comments:false
    })
  ]
};