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
        name: 'Weekly',
        component: WeeklyCalendar,
      },
      {
        path: 'monthly',
        name: 'Monthly',
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
