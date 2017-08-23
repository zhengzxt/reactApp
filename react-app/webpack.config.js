//import webpake from 'webpack';
const webpack = require('webpack');
module.exports={
	entry:[
		'webpack-dev-server/client?http://localhost:8070',
		'webpack/hot/only-dev-server',
		__dirname + "/src/js/app.js"
	],
	output:{
		path:__dirname+'/prd',
		filename:'bundle.js'
	},
	module:{
		loaders:[
		{
			test:/\.js$/,
			loader:'babel-loader'
		},
		{
			test:/\.css$/,
			loader:'style-loader!css-loader'
		},
		{
			test:/\.scss$/,
			loader:'style-loader!css-loader!sass-loader'
		},
		{
			test:/\.jsx$/,
			loader:'babel-loader'
		}
		]
	},

	devtool:"source-map",

	plugins:[
		new webpack.HotModuleReplacementPlugin(),
	]
}