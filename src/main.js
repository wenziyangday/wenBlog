// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// todo 全站进度条的引入以及部分数据的编写


import axios from 'axios';
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  VueAwesomeSwiper,
  ElementUI,
  components: {App},
  template: '<App/>'
});
