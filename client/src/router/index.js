import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/dashboard/Dashboard';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
  ],
});
