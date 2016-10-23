var config = {
   entry: './src',   
   output: {
      path:'./',
      filename: 'index.js',
   },
   
   devServer: {
      inline: true,
      port: 8080
   },
   resolve: {
      modulesDirectories: ['node_modules', 'src'],
      extensions: ['', '.js']
   },
   
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;