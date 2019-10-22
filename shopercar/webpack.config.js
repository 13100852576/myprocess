const HtmlPlugin =require('html-webpack-plugin');
const path =require('path');
const eTp=require('extract-text-webpack-plugin');

module.exports={
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'output'),
        filename:"[name].js"
    },
    plugins:[
        new HtmlPlugin({template:'shopcar.html'}),
        new eTp("index.css")
    ],
    module:{
        rules:[
            {
                test:/\.css$/,
                use:eTp.extract({
                    fallback:'style-loader',
                    use:'css-loader'
                })
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