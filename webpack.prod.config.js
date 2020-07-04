const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
	mode: 'production',
	entry: './src/client/index.js',
    module: {
            rules: 
			[
              {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
              },
			  {
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'eslint-loader',
				options: {
					// eslint options (if necessary)
		        },
              },
            ]
    },
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/client/views/index.html",
			filename: "./index.html",
		})
	
	]
	
}