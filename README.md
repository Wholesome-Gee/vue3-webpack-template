# 프론트엔드 패키지 Online Part8_Ch1.Vue 시작하기 강의
## 01. 개요
- Vue.js 웹프론트엔드 프레임워크
- Vue.js 난이도는 낮고 성숙도는 높다.
- Vue.js 공식 문서
  - <a href="https://ko.vuejs.org/guide/introduction.html">https://ko.vuejs.org/guide/introduction.html</a>
<br/>

## 02. CDN, Codepen
- Vue.js Github에서 버전 패치내역 (releases) 확인
  - <a href="https://github.com/vuejs/core/releases">https://github.com/vuejs/core/releases</a>
<br/>

## 03. Vue CLI
- Vue CLI 문서
  - <a href="https://cli.vuejs.org/guide/">https://cli.vuejs.org/guide/</a>
- `cd desktop`
- `npm i -g vue/cli`
  - Vue3 version 체크
- `vue create 프로젝트명`
- `cd 프로젝트명`
- `code . -r`
- ***Vue-official*** 확장프로그램 설치
- package.json ➡️ "scripts"
  - "serve": 개발서버를 오픈할 때 사용하는 명령어 `npm run sever`
  - "build": 프로젝트를 제품화 시키는 명령어 `npm run build`
  - "lint": Vue.js 코드가 규칙에 맞게 작성되었는지 확인하기 위한 명령어 `npm run lint`
- package.json ➡️ "eslintConfig" ➡️ "rules"
  - Vue.js에서 코드를 작성하는 규칙을 만들 수 있다.
- Vue CLI는 내부적으로 webpack을 사용하고있음.

<br/>

## 04. Vue3 Webpack Template
- `cd Desktop`
- `npx degit wholesome-gee/webpack-template-basic 프로젝트명`
- `cd 프로젝트명`
- `code . -r`
- `npm i vue`
  - vue: 기본적인 Vue의 문법을 참조하는 패키지
- `npm i -D vue-loader@next vue-style-loader @vue/compiler-sfc`
  - vue-loader: webpack이 Vue 파일을 읽을 수 있도록 해주는 패키지지
  - vue-style-loader: App.vue \<style> 안의 내용을 동작시켜주는 패키지
  - @vue/compiler-sfc: Vue file을 브라우저가 읽을 수 있도록 변환
- `npm i -D file-loader`
  - file-loader: 특정한 파일(이미지파일 등)들을 읽어서 webpack으로 번들링 할 수 있는 패키지
- ***static/images*** ➡️ ***src/images*** 로 경로 변경 후 ***images***폴더를 ***assets***로 이름 변경
- webpack.config.js 수정
  ```js
  //import 
  const path = require('path'); // node js의 전역객체 path를 불러옴
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
    // webpack의 module 설정
    module: {
      rules: [
        {
          test: /\.vue$/,
          use: 'vue-loader'
        },
        {
          test: /\.(png|jpe?g|gif|webp)$/,
          use: 'file-loader'
        },
      ]
    },

    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
      new VueLoaderPlugin() // webpack에게 vue-loader를 실행하라고 지정
    ]
  }
  ```
- index.html 수정
  ```html
  <!DOCTYPE html>
  <html lang="ko">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello Webpack!</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
  </html>
  ```
- src/main.js 생성 (루트경로에 js 폴더가 있다면 js 폴더 삭제)
  ```js
  import { createApp } from 'vue';
  import App from './App'

  createApp(App).mount('#app');
  ```

- src/App.vue 생성
  ```js
  <template>
    <h1> {{ message }}</h1>
    <HelloWorld/>
  </template>

  <script>
  import HelloWorld from './components/HelloWorld';
  export default {
    components: {
      HelloWorld
    },
    data() {
      return {
        message: 'Hello Vue.js!!!'
      }
    }
  }
  </script>
  ```
- src/components/HelloWorld.vue 생성
  ```js
  <template>
  <img src="~assets/logo.png" alt="logo"/>
  </template>
  ```

<br/>

## 05. Vue3 Webpack Template - ESLint 구성
- `npm i -D eslint eslint-plugin-vue babel-eslint`
  - eslint: 
  - eslint-plugin-vue: Vue JS의 코드 검사규칙 패키지
    - <a href="https://eslint.vuejs.org/rules/">https://eslint.vuejs.org/rules/</a>
  - babel-eslint: 

- .eslintrc.js 생성
  ```js
  module.exports = {
    env:{
      browser:true,
      node: true,
    },
    extends: [
      // vue
      // 'plugin:vue/vue3-essential', // Lv1
      'plugin:vue/vue3-strongly-recommended', // Lv2
      // 'plugin:vue/vue3-recommended' // Lv3
  
      //js
      'eslint:recommended'
    ],
    parserOptions: {
      parser: 'babel-eslint'
    },
    rules: {
    }
  }
  ```

<br/>

## 06. 선언적 렌더링과 입력 핸들링
<a href="https://github.com/Wholesome-Gee/vue3-test">https://github.com/Wholesome-Gee/vue3-test</a>
<br/>

## 07. 조건문과 반복문
<a href="https://github.com/Wholesome-Gee/vue3-test">https://github.com/Wholesome-Gee/vue3-test</a>
<br/>
