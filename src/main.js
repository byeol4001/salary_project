import Vue from 'vue';
import App from './App.vue';
import router from './route/router';
import '../src/style/common.css';
import '../src/style/layout.scss';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
