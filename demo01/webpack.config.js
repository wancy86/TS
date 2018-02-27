module.exports = {
	entry: './app.ts',
	output: {
		filename: './app.js'
	},
	module: {
		loaders: [{
			test: /\.ts$/,
			loader: 'ts-loader'
		}]
	},
	resolve: {
		extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
	}
}