import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../components/Main';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'main',
      path: '/main',
      component: Main,
    },
  ],
});
