const path = require('path');
module.exports = {
	entry: './app.ts',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'app.js'
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/
			},
			{
				test: /\.js$/,
				use: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.webpack.js', '.web.js', '.ts', '.js']
	}
}
