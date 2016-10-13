var path = require('path');

module.exports = {

	entry: './main.js',
	output: {
		path: '/',
		filename: 'index.js'
	},
	
	module: {

    			preLoaders: [ 
    			  {
    			    test: /\.js$/,
    			    loaders: ['eslint'],
    			    include: [
    			      path.resolve(__dirname, "./"),
    			    ],
    			  }
    			],
		loaders: [
					{
						test: /\.js$/,
						exclude: /node_modules/,
						loader: 'babel',
						query: {
							presets: ['es2015', 'react']
						}
					},
					{
						test: /\.scss$/,
						loaders: ['style', 'css', 'sass'],
					}
		]
	}
}