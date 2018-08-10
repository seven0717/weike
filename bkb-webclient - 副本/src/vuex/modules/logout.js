 import { 
    BKB_LOGOUT,
    LOGIN_FAILE
 } from '../mutation-type.js'
import store from '../index'

const state = {
    loginfaile:'',
}

const mutations = {
    BKB_LOGOUT (state,res) {
        sessionStorage.clear();
        store.state.login.token = null;
        store.state.layout.leftScrollSidebarMenu = [];
        store.state.layout.localStorageMenu = [];
    },
    LOGIN_FAILE ( state ) {
        state.loginfaile = "登录过期"
    }
}

const actions = { }

export default {
  mutations,
  actions
}