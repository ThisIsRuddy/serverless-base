const path = require('path');
const nodeExternals = require('webpack-node-externals');
const slsw = require('serverless-webpack');

module.exports = {
	// entry: slsw.lib.entries,
	target: 'node',
	mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
	//devtool: 'source-map',
	optimization: {
		minimize: false
	},
	performance: {
		hints: false
	},
	externals: [nodeExternals()],
	resolve: {
		extensions: ['.js']
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				include: __dirname,
				exclude: /node_modules/
			}
		]
	},
	output: {
		libraryTarget: 'commonjs2',
		path: path.join(__dirname, '.webpack'),
		filename: '[name].js'
	}
};
