const HtmlPlugin =require('html-webpack-plugin');
const path =require('path');

module.exports={
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'output'),
        filename:"[name].js"
    },
    plugins:[
        new HtmlPlugin({template:'shopcar.html'}),

    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.(png|gif|jpg)/,
                use:[{
                    loader:"url-loader",
                    options:{
                        outputPath:"images/"
                    }
                }]
            },{
                test: /\.(htm|html)$/i,
                use:[ 'html-withimg-loader'] 
            }
        ]
    }
}