import Vue from 'vue'
import app from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
//导入MUI样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'
//vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)
//按需导入mint-ui中的组件
import {Header,Swipe, SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header)

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
import router from './router.js'
var vm = new Vue({
  el:'#app',
  render:c=>c(app),
  router
})