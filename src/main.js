// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import store from './store';
import Cookies from 'js-cookie';
import utils from './utils/index';
import http from './http/index';
import './icons/index';
import '../index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$utils = utils;
Vue.prototype.$Cookies = Cookies;
Vue.prototype.$http = http;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
