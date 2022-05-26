const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports ={
    mode: isDevelopment ? 'development':'production',
    devtool: isDevelopment? 'eval-source-map' : 'source-map',
    entry:path.resolve(__dirname,'src','index.jsx'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions:['.js','.jsx']
    },
    devServer:{
        static: path.resolve(__dirname, 'public')                   
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'public','index.html')
        })
    ],
    module:{
        rules:[
            {
                test: /\.jsx$/, //quando exportar um .jsx de node_modules
                exclude:/node_modules/, // não faça a conversão
                use:'babel-loader'
            }
            {
                test: /\.css$/, //quando exportar um .jsx de node_modules
                exclude:/node_modules/, // não faça a conversão
                use:''
            }
        ]
    }
};