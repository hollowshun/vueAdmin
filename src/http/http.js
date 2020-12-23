import axios from 'axios';
import router from '../router';
import store from '../store/index';
import {
  Message,
  Loading
} from 'element-ui';

const toLogin = () => {
  router.replace({
    path: '/login',
    query: {
      redirect: router.currentRoute.fullPath
    }
  });
}

// 全局加载
let loadingNum = 0,
  loading;

function startLoading() {
  if (loadingNum == 0) {
    loading = Loading.service({
      lock: true,
      text: "拼命加载中...",
      spinner: "el-icon-loading",
      background: "rgba(0, 0, 0, 0.7)"
    });
  }
  loadingNum++;
}

function endLoading() {
  loadingNum--;
  if (loadingNum <= 0) {
    loading.close();
  }
}



const errorHandle = (status, other) => {
  // 状态码判断
  switch (status) {
    // 401: 未登录状态，跳转登录页
    case 401:
      toLogin();
      break;
      // 403 token过期
      // 清除token并跳转登录页
    case 403:
      Message.error('登录过期，请重新登录');
      localStorage.removeItem('token');
      // store.commit('loginSuccess', null);
      setTimeout(() => {
        toLogin();
      }, 1000);
      break;
      // 404请求不存在
    case 404:
      Message.error('请求的资源不存在');
      break;
    case 405:
      Message.error('请求405');
      break;
    default:
      Message(other);
  }
}
// 创建axios实例
var instance = axios.create({
  timeout: 1000 * 10
});
// 设置post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

instance.interceptors.request.use(
  config => {
    startLoading()
    // 这里添加请求头信息
    // config.headers['token'] = store.getters.token
    return config;
  },
  error => Promise.error(error))

// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  res => {
    endLoading()
    // if (res.status == 200) {
    return Promise.resolve(res.data)
    // } else {
    //   return Promise.reject(res.data)
    // }
  },
  // 请求失败
  error => {
    const {
      response
    } = error;
    endLoading()
    if (response) {
      // 请求已发出，但是不在2xx的范围 
      errorHandle(response.status, response.data.message);
      return Promise.reject(response);
    } else {
      // 处理断网的情况
      if (!window.navigator.onLine) {
        console.log('网络异常')
      } else {
        console.log(222)
        return Promise.reject(error);
      }
    }
  });

export default instance;
