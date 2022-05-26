const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports ={
    mode: 'development',
    entry:path.resolve(__dirname,'src','index.jsx'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions:['.js','.jsx']
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
        ]
    }
};