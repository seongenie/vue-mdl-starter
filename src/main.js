import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

// Material Design Lite directive
Vue.directive('mdl', {
  bind(el) {
    if (window.componentHandler) window.componentHandler.upgradeElement(el);
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
