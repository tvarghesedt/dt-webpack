var webpack = require('webpack');
module.exports = {
entry: {
app: './app.js',
vendor: ['jquery']
},
output: {
filename: 'app.bundle.js'
},
plugins: [
new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")//
]
// plugins: [
//     new webpack.ProvidePlugin({
//       $: "jquery",
//       jQuery: "jquery",
//       "window.jQuery": "jquery"
//     })
//   ]
};