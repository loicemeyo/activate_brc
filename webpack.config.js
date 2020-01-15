const path = require('path');

// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {

  // Path to your entry point. From this file Webpack will begin his work
  entry: './src/index.js',

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    // publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
       
            }
          },
          {
            // Now we apply rule for images
            test: /\.(png|jpe?g|gif|svg)$/,
            use: {
                     loader: "url-loader",
  
                   }
                 
          },
          {
            // Apply rule for fonts files
            test: /\.(woff|woff2|ttf|otf|eot)$/,
            use: [
                   {
                     // Using file-loader too
                     loader: "url-loader",
                   }
                 ]
          }
    ]
  },
  

  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on final bundle. For now we don't need production's JavaScript 
  // minifying and other thing so let's set mode to development
  mode: 'development'
};
