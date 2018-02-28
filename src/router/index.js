import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home';
import HtmlCss from '../components/notHome/htmlCss';
import Es5Es6 from '../components/notHome/es5Es6';
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
      path: '/htmlCss',
      name: 'htmlCss',
      component: HtmlCss
    },
    {
      path: '/es5Es6',
      name: 'es5Es6',
      component: Es5Es6
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
