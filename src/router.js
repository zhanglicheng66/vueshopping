import VueRouter from 'vue-router'


//导入对应的路由组件
import home from './components/tabbar/home.vue'
import member from './components/tabbar/member.vue'
import search from './components/tabbar/search.vue'
import shopcar from './components/tabbar/shopcar.vue'

// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:home},
    {path:'/member',component:member},
    {path:'/shopcar',component:shopcar},
    {path:'/search',component:search}
  ],
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router