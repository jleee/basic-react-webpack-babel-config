const webpack = require('webpack');
const path 	  = require('path');

const config = {
    entry: path.resolve('src/index.js'), 
    output: {
    	path: path.resolve('dist'),
        filename: 'bundle.js'
    },
    watch: true,

    module: {
    	loaders: [
    		{
    			test: /\.js?$/,
    			loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['react', 'es2015']
                }
    		}
    	]
    },

    devServer: {
    	contentBase: path.join(__dirname,'dist'),
    	compress: true,
    	port: 3000
    }
};

module.exports = config;