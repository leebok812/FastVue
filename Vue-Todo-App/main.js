import Vue from 'vue'
import App from './App.vue'


new Vue({

    el:'#app',
    // render (createElement) {
    //     return createElement(App)
    // }, 밑에랑 같은 말임
    render: h => h(App)
})



