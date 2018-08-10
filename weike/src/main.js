// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 外部引入组件
import vuex from 'vuex'
import Axios from 'axios';
import { Button,Tabs,TabPane,Row,Col,Form,FormItem,Input,Message,Switch,Container,Header,Main,Footer,Dropdown, DropdownMenu,
          DropdownItem,Radio,RadioGroup,RadioButton, } from 'element-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(VueAwesomeSwiper)
Vue.use(Button)
Vue.use(Tabs)
Vue.use(Row)
Vue.use(Col)
Vue.use(TabPane)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Switch)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(RadioButton)
Vue.prototype.$axios = Axios;
Vue.prototype.$message = Message;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuex,
  // components: { App },
  // template: '<App/>'
  render: h => h(App)
})
