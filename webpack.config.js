const path = require('path');
const webpack = require('webpack');

const config = {
	context: __dirname,
	entry: [
		'react-hot-loader/patch',
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/only-dev-server',
		'./js/ClientApp.jsx'
	],
	devtool: 'cheap-eval-source-map',
	devServer: {
		hot: true,
		publicPath: '/public/'
	},
	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js',
		publicPath: '/public/'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json', '.css']
	},
	stats: {
		colors: true,
		reasons: true,
		chunks: false
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NamedModulesPlugin()
	],
	module: {
		rules: [
			{
				enforce: 'pre', // before it goes to babel
				test: /\.jsx?$/,
				loader: 'eslint-loader',
				exclude: /node_modules/
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				loader: 'style-loader'
			},
			{
				test: /\.css$/,
				loader: 'css-loader'
			}
		]
	}
};

if (process.env.NODE_ENV === 'production') {
	config.entry = './js/ClientApp.jsx';
	config.devtool = false;
	config.plugins = [];
}

module.exports = config;
