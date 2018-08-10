// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.config.productionTip = false

const ADD = 'ADD';
const REMO = 'REMO';

var store = new Vuex.Store({
	state:{
		token:'',
		userID:''
	},
	mutations:{
		[ADD] (state,token){
			sessionStorage.setItem('token',token);
			state.token = token;
		},
		[REMO] (state,token){
			sessionStorage.removeItem('token',token);
			state.token = token;
		}
	}
})

router.beforeEach((to,from, next) => {

	store.state.token = sessionStorage.getItem('token');
	if (to.meta.requireAuth) {
		if (store.state.token !== '') {
			next();
		} else {
				next({
					path:'/login',
					query:{redirect:to.fullPath}
				})
		}
	}else{
		next()
	}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
