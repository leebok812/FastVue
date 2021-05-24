
const path = require('path') //nodeJs에서 제공하는 path 모듈
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
    entry: { //진입점
        app: path.join(__dirname, 'main.js')  //app은 진입하는 파일의 별칭 || __dirname 은 nodeJS에서 제공하는 현재파일의 위치를 제공하는 전역변수
    }, 
    output: { // 결과물에 대한 설정
        filename: '[name].js', // 결과물이 나오는 이름 || 대괄호 [] 안에 name을 넣어주면 진입점 app이 자동으로 박힘
        path: path.join(__dirname,'dist') // dist는 디렉토리 이름임
    }, 
    module: {
        rules:[

            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }

        ]       
    }, 
    plugins: [
        new VueLoaderPlugin()
    ]

}

//https://justclean.tistory.com/170