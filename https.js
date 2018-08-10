
import axios from 'axios'
import router from '../router/'
import store from '../vuex/index'
// http request 请求拦截器，有token值则配置上token值

// 创建实例
var Requests = axios.create({
    baseURL:'https://40.125.171.126/'
});

// http request 请求拦截器，有token值则配置上token值
Requests.interceptors.request.use(
    (config) => {
        if (store.state.login.token) {
            config.headers.Authorization = `Bearer ${sessionStorage.getItem('AuthorizationBearer')}`;
            return config;
        }
        console.log('发送请求>>',config)
        return config;
    },
    err => {
        return Promise.reject('发送错误>>',err);
    });

// http response 服务器响应拦截器，这里拦截401错误，并重新跳入登页重新获取token
Requests.interceptors.response.use(
    (res) => {
        if (res.headers.authorization) {
            var token = res.headers.authorization；
            token = token.split(/Bearer\:?\s?/i)；
            store.state.login.token = token[1]；
            sessionStorage.setItem('AuthorizationBearer', token[1])；
            return res;
        }
        console.log('接收请求>>',res)
        return res;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 403:
                        store.commit('BKB_LOGOUT');
                        store.commit('LOGIN_FAILE');
                        router.replace({
                            path: '/login',
                            query: { redirect: router.currentRoute.fullPath }
                        });
                        break;
                case 404:
                        router.replace({ path: '/404' });
                        break;
            }
        }
        return Promise.reject('接收错误>>',error.res.data) 
    });

export default axios