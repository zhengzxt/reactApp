//import webpack from 'webpack';
const webpack = require('webpack');
//import WebpackDevServer from 'webpack-dev-server';
const WebpackDevServer = require('webpack-dev-server') ;
//import config from './webpack.config.js';
const config = require('./webpack.config.js');

new WebpackDevServer(webpack(config),{
	contentBase:__dirname + '/prd',
	inline:true,
	hot:true,
	historyApiFallback:true
}).listen(8070,"localhost",function(err,res){
	if(err){
		console.log(err);
	}else{
		console.log("localhost:8050");
	}
})