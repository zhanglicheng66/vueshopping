import Vue from 'vue'
import app from './App.vue'

//导入MUI样式
import './lib/mui/css/mui.css'
//按需导入mint-ui中的组件
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)
var vm = new Vue({
  el:'#app',
  render:c=>c(app)
})