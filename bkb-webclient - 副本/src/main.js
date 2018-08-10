import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/'
import FastClick from 'fastclick'
import VueCookie from 'vue-cookie'

// 按需加载ElementUI组件
import {
	Row,Col,Tooltip,Tree,Input,Form,FormItem,Checkbox,Scrollbar,Button,Loading,Table,TableColumn,
    Select,Option,Dropdown,DropdownMenu,DropdownItem,Dialog,Radio,RadioGroup,Tag,Message,Cascader
} from 'element-ui'

// 引入的ElementUI组件的css（直接使用的样式，没有按需加载组件，按需加载的组件会自动引入css）
import 'element-ui/lib/theme-default/icon.css'
import 'element-ui/lib/theme-default/menu.css'
import 'element-ui/lib/theme-default/menu-item.css'
import 'element-ui/lib/theme-default/button.css'

// 引入图标库
import 'font-awesome/css/font-awesome.min.css'

Vue.use(Tooltip)
Vue.use(Tree)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Checkbox)
Vue.use(Scrollbar)
Vue.use(Button)
Vue.use(Loading)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Row)
Vue.use(Col)
Vue.use(Select)
Vue.use(Option)
Vue.use(Message)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Dialog)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Tag)
Vue.use(Cascader)
Vue.use(VueCookie)

import './assets/css/bkb.css'

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

Vue.prototype.$message = Message
Message.closeAll()
if (window.sessionStorage.getItem('AuthorizationBearer')) {
    store.state.login.token = window.sessionStorage.getItem('AuthorizationBearer')
}

// router.beforeEach((to, from, next) => {
//     if (to.matched.some(r => r.meta.auth)) {  // 判断该路由是否需要登录权限
//         if (store.state.login.token) {  // 通过vuex state获取当前的token是否存在
//             next();
//         }
//         else {
//             next({
//                 path: '/login',
//                 query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//             })
//         }
//     }
//     else {
//         next();
//     }
// })

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)   //使用render实现runtime-only模式，节省
})
