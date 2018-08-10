import axios from 'axios'
import store from '../vuex/index'
import router from '../router/'
import API from '../data/api'
const api = new API();

if (process.env.NODE_ENV == 'development') {
    var Requests = axios.create({ baseURL: 'http://192.168.0.20' });
} else {
    var Requests = axios.create({});
}

// http request 拦截器
Requests.interceptors.request.use(function(req) {
    if (store.state.login.token) {
        req.headers.Authorization = `Bearer ${sessionStorage.getItem('AuthorizationBearer')}`;
    }
    return req;
}, function(err) {
    return Promise.reject(err);
});

// http response 拦截器
Requests.interceptors.response.use(function(res) {
    if (res.headers.authorization) {
        var token = res.headers.authorization
        token = token.split(/Bearer\:?\s?/i)
        store.state.login.token = token[1]
        sessionStorage.setItem('AuthorizationBearer', token[1])
        return res;
    } else {
        return res;
    }
}, function(error) {
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
                // case 401:
                //     let that = this;
                //     api.reqWarn(that,'您没有权限操作')
                //     break;
        }
    }
    return Promise.reject(error.response) // 返回接口返回的错误信息
});
export default Requests;