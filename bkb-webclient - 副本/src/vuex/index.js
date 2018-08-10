import Vue from 'vue'
import Vuex from 'vuex'
import layout from './modules/layout'
import login from './modules/login'
import logout from './modules/logout'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        layout,
        login,
        logout,
    }
})