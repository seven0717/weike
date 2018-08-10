import axios from 'axios';
import router from '@/router';
import api from '@/api';

// 开发/生产环境地址
axios.defaults.baseURL = process.env.API;

// axios拦截器
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  if(error.response){
    switch (error.response.status) {
      case 403:
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
  return Promise.reject(error);
});

export default axios;