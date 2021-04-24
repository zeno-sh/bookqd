import Vue from "vue";
import axios from 'axios';
import router from '@/router';
import utils from '@/utils/utils';
import $store from '@/store/index';
axios.defaults.timeout = 20 * 1000;
axios.defaults.withCredentials = true;

// 环境的切换
if (process.env.NODE_ENV == 'development') {    
    axios.defaults.baseURL = 'http://127.0.0.1:8080/api/library';} 

else if (process.env.NODE_ENV == 'production') {    
    axios.defaults.baseURL = 'https://www.production.com';
}
axios.defaults.withCredentials = true;//Cookie跨域

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (res) {
    let data = res.data;
    if(data.code !== 200) {
        utils.$Message.error(`${data.code}：${data.msg}`);
        return Promise.reject(status);
    }
    return res;
}, function (error) {
    if (!error.response) {
        utils.$Message.error('请求超时，请重试！');
        return Promise.reject(error);
    }
    let { status, data } = error.response;
    if (data.msg) {
        utils.$Message.error(`${data.code}：${data.msg}`);
    }
    if (status == 403) {
        $store.dispatch("menu/logOutBtn");
    }
    
    return Promise.reject(status);
});
Vue.prototype.$http = axios;
export default axios;
