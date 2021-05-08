// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

const Vue = window.Vue
Vue.config.productionTip = false

import Demo from "./Demo.vue";

//组件
Vue.component('Demo2',{
    template:`
        <div>demo22222</div>
    `
})


//vm是vue实例
//vm是vue对象
const vm = new Vue({
    components:{Demo},
   data(){
       return {
           n:0,
           array:[1,2,3,4,5,6,7,8]
       }
   },
    template:`
      <div class="red">
          {{n}}
          <button @click="add">+1</button>
          <Demo/>
          <hr>
          {{filter()}}
      </div>
    `,
    methods:{
        add(){
            this.n += 1
        },
        filter(){
            console.log("cccc")
           return this.array.filter(i=>i%2===0)
        },
    }
})
vm.$mount('#app')