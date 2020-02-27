import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Dashboard1 from '@/components/Dashboard_1.vue';
import Dashboard2 from '@/components/Dashboard_2.vue';
import Login from '../views/login.vue';
import ContactUs from '../views/contact_us.vue';
import Admin from '../views/admin.vue';
import Checkout from '../views/checkout.vue';
import Details from '../views/single_detail.vue';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

const routes = [
  {
    path: '*',
    redirect: '/index',
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/contact_us',
    component: ContactUs,
  },
  {
    path: '/index',
    component: Dashboard1,
  },
  {
    path: '/admin',
    component: Admin,
    meta: { requiresAuth: true },
  },
  {
    path: '/product/',
    component: Dashboard2,
    children: [
      {
        name: 'checkout',
        component: Checkout,
        path: '/:id/checkout',
      },
    ],
  },
  {
    path: '/details/',
    component: Dashboard2,
    children: [
      {
        name: 'details',
        component: Details,
        path: '/:id/details',
      },
    ],
  },
];


const router = new VueRouter({
  mode: 'history',
  hash: false,
  base: process.env.BASE_URL,
  routes,
});

export default router;
