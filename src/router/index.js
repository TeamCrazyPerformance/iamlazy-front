import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import Calendar from '../views/Calendar.vue';
import Setting from '../views/Setting.vue';
import WeeklyCalendar from '../components/weeklyCalendar/WeeklyCalendar.vue';
import Monthlyalendar from '../components/monthlyCalendar/MonthlyCalendar.vue';

Vue.use(VueRouter);

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
    children: [
      {
        path: 'weekly',
        component: WeeklyCalendar,
      },
      {
        path: 'monthly',
        component: Monthlyalendar,
      },
    ],
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
