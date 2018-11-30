import Vue from 'vue';
import Router from 'vue-router';
// import Main from '@/components/Main'
// import Main from '@/components/Main';
import Container from '../components/tryItOut/Container';
import Login from '../components/foundation/login/Login';

Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      redirect: 'try'
    },
    {
      path: '/try',
      name: 'Try',
      component: Container
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
});
