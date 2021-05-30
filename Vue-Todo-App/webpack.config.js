
const path = require('path') //nodeJs에서 제공하는 path 모듈
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin') //ES6 문법
require('@babel/polyfill')


module.exports = {
    entry: { //진입점
        app: [
            '@babel/polyfill',
            path.join(__dirname, 'main.js') //app은 진입하는 파일의 별칭 || __dirname 은 nodeJS에서 제공하는 현재파일의 위치를 제공하는 전역변수
        ] 
        
    }, 
    output: { // 결과물에 대한 설정
        filename: '[name].js', // 결과물이 나오는 이름 || 대괄호 [] 안에 name을 넣어주면 진입점 app이 자동으로 박힘
        path: path.join(__dirname,'dist') // dist는 디렉토리 이름임
    }, 
    module: {
        rules:[

            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [ 
                    'vue-style-loader',
                    'css-loader'
                ]
            }

        ]       
    }, 
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html')
        }), 
        new CopyPlugin(
            {
                patterns: [
                {from:'assets/', to:''} // assets에 있는 모든 파일을 복사해서 to로 보내주는것
                ]  // https://stackoverflow.com/questions/61937054/npm-run-dev-fails-validationerror-invalid-options-object
            }
        ),
        new CleanWebpackPlugin () // dist folder를 비워줌 
    ],
    devServer: { //npx webpack serve  참조 : https://velog.io/@code-bebop/webpack-dev-server-module-not-found-error
        open: false,
        hot: true
    },
    devtool: 'evel'

}

//https://justclean.tistory.com/170