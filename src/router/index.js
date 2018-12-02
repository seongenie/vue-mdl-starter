import Vue from 'vue';
import Router from 'vue-router';
// import Main from '@/components/Main'
// import Main from '@/components/Main';
import Container from '../components/tryItOut/Container';
import Login from '../components/foundation/login/Login';
import Map from '../components/map/Map';
import Management from '../components/taste/Management';

Vue.use(Router);
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      redirect: 'management'
    },
    {
      path: '/management',
      name: 'Management',
      component: Management
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
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    }
  ]
});
