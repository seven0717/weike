import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        lo: {
            users: '',
            pwds: ''
        },
        token:null
    },
    mutations: {
        us(state,adds){
        	console.log(adds)
        	state.token = adds
        }
    }
})