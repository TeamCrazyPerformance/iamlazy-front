import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import Login from '../views/Login.vue';
import Calendar from '../views/Calendar.vue';
import Setting from '../views/Setting.vue';

Vue.use(VueRouter);

function registerToken(token) {
  store.dispatch('registerToken', token);
}

function checkToken(to, from, next) {
  if (to.query.token) registerToken(to.query.token);
  if (store.getters.token) next();
  else next('/');
}

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: Calendar,
    beforeEnter: checkToken,
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting,
    beforeEnter: checkToken,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
