const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	resolve: {
		alias: {
			'~': path.resolve(__dirname, 'src'),
		},
		extensions: ['.js', '.jsx']
	},
	module: {
		rules: [
			{ 
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: ['babel-loader']
			},
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			},
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/index.html',
			filename: './index.html',
		})
	],
	optimization: {
		splitChunks: {
			chunks: 'all',
		}
	}
};