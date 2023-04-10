//编写webpack配置

//引入path包 主要用来拼接路径
const path=require('path');
//引入Html插件  用来自动生成html文件
const HTMLWebpackPlugin=require('html-webpack-plugin');
//引入插件clean-webpack-plugin用来在每一次打包时删除原文件
const {CleanWebpackPlugin} =require('clean-webpack-plugin');

//webpack所有的配置信息都要写在module.exports中
module.exports={

    //指定人口文件
    entry: "./src/index.ts",
    //指定文件打包输出的目录
    output: {
        //指定打包后文件存放的目录
        path: path.resolve(__dirname,'dist'),
        //打包后文件的名字
        filename: "bundle.js",
        //设置打包环境 告诉webpacke不使用箭头函数
        environment:{
            arrowFunction: false,
            // 不使用const,此时兼容IE 10
            const: false
        }
    },
    //设置mode
    mode: 'development',
    //指定webpack打包时要使用的模块
    module: {
        //指定要加载的规则
        rules: [
            {
                //test指定规则生效的文件  /\.ts$/表示匹配所以ts结尾的文件
                test: /\.ts$/,   
                //要使用的loader 从下面开始执行
                use: [
                    //配置babel
                    {
                        //指定加载器
                        loader: "babel-loader",
                        //设置babel
                        options: {
                            //设置预定义环境
                            presets:[
                                [
                                    //指定环境插件
                                    "@babel/preset-env",
                                    //配置信息
                                    {
                                        //设置浏览器兼容版本
                                        targets:{
                                            //"chrome":"58"，
                                            "ie":"11"
                                        },
                                        //设置下载的core.js版本
                                        "corejs": "3",
                                        //设置使用corejs的方法  usage表示按需加载
                                        "useBuiltIns": "usage"

                                    }
                                ]
                            ]
                        }

                    },
                    'ts-loader',
                ],
                //指定要排除编译的文件夹
                exclude: /node-modules/
            },
           
            // 设置less文件的处理
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",

                    // 引入postcss
                    // 类似于babel，把css语法转换兼容旧版浏览器的语法
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        // 浏览器兼容插件
                                        "postcss-preset-env",
                                        {
                                            // 每个浏览器最新两个版本
                                            browsers: 'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },
    //配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            //设置生成的html文件的模板,模板必须存在
            template: "./src/index.html"
        }),
    ],
    //设置引用模块
    resolve: {
        //设置只要是ts和js结尾的文件都可以作为模块引用
        extensions: ['.ts','.js']
    }
};