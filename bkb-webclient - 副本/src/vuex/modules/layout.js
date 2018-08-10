import {
    COOLLECT_MENU,
    CANCEL_MENU,
    BKB_MOREMENU,
} from '../mutation-type.js'
import Abp from '../../Abp/Abp'

const state = {
    moremenu: [],
    leftScrollSidebarMenu: [],
    localStorageMenu: [],
}

const mutations = {
    // 收藏菜单
    COOLLECT_MENU(state, x) {
        state.leftScrollSidebarMenu.push(x);
    },
    // 取消收藏菜单
    CANCEL_MENU(state, a) {
        state.localStorageMenu.push(a);
    },
    // 后台获取备课帮菜单
    BKB_MOREMENU(state) {
        if (sessionStorage.getItem('GlobalMenuItem')) {
            state.moremenu = $.parseJSON(sessionStorage.getItem('GlobalMenuItem'));
        } else {
            state.moremenu = [];
        }
    }
}

const actions = {
    bgmoremenu(context) {
        var res = $.parseJSON(sessionStorage.getItem('GlobalMenu'))
        if (!res) {
            var jsonDataTree = Abp.transData(res, 'ID', 'PID', 'children');
            sessionStorage.setItem('GlobalMenuItem', JSON.stringify(jsonDataTree));
            context.commit('BKB_MOREMENU')
        } else {
            console.log("菜单列表为空，请联系管理员");
            context.commit('BKB_MOREMENU')
        }

    }
}

export default {
    state,
    mutations,
    actions
}