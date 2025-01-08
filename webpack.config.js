//import 
const path = require('path'); // node js의 전역객체 path를 불러옴
const HtmlPlugin = require('html-webpack-plugin') // html-webpack-plugin 패키지 불러옴
const CopyPlugin = require('copy-webpack-plugin') // copy-webpack-plugin 패키지 불러옴
const { VueLoaderPlugin } = require('vue-loader') // vue-loader 패키지내의 VueLoaderPlugin 변수를 불러옴

// export
module.exports = {
  resolve: {
    // 파일 확장자명을 알아서 붙혀주는 옵션
    extensions: ['.js', '.vue'],
    // 경로를 별칭으로 만들어주는 옵션
    alias: {
      '~': path.resolve(__dirname,'src'),
      'assets': path.resolve(__dirname,'src/assets'),
    }
  },
  // 파일을 읽어들이기 시작하는 진입점 설정
  entry: './src/main.js',

  // webpack이 컴파일한 결과물을 어디에 저장할 것인지 설정
  output: {
    // node js의 전역변수 __dirname으로 path의 기본 경로 설정
    path: path.resolve(__dirname, 'dist'), // 기본값
    filename:'main.js', // 기본값
    clean: true,
  },
  
  // webpack의 module 설정
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.s?css$/,
        use: [
          //순서 중요
          'vue-style-loader',
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: 'file-loader'
      },
    ]
  },

  // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    // webpack에게 index.html을 template으로 번들링 하라고 지정
    new HtmlPlugin({
      template: './index.html'
    }),
    // webpack에게 static 폴더를 번들링 하라고 지정
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    }),
    new VueLoaderPlugin() // webpack에게 vue-loader를 실행하라고 지정
  ]
}