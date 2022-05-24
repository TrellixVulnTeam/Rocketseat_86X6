const path = require('path');

module.exports ={
    entry:path.resolve(__dirname,'src','index.jsx'),
    output:{
        path:path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },
    resolve:{
        extensions:['.js','.jsx']
    },
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