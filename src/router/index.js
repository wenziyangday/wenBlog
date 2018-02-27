import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home';
import Detail from '../components/detail';

Vue.use(Router);

const routes = {
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/home',
          component: Home,
        }
      ]
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ],
  linkExactActiveClass: 'active'
};

export default new Router(routes);
