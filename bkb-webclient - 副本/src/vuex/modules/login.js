import {
    BKB_LOGIN
} from '../mutation-type.js'

const state = {
    token: null,
}

const mutations = {
    BKB_LOGIN(state, res) {
        state.token = res.data.Data;
        console.log(state.token);
    }
}

const actions = {
    login(context, res) {
        context.commit('BKB_LOGIN', res)
    }
}

export default {
    state,
    mutations,
    actions
}