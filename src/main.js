import axios from 'axios';
import VueAxios from 'vue-axios';
import ElementUI from 'element-ui';
import Vue from 'vue';
import VueCookies from 'vue-cookies';
import App from './App.vue';
import router from './router';
import store from './store';
import Currency from "./filters/currency";
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap';
import 'tailwindcss/tailwind.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import landing_pic from "@/assets/03.jpg"
import {ValidationObserver, ValidationProvider,extend,} from "vee-validate";
import * as rules from "vee-validate/dist/rules";
// 安裝所有 VeeValidate 規則
Object.keys(rules).forEach(rule => {extend(rule, rules[rule]);});


Vue.prototype.$cookies = VueCookies;
Vue.config.productionTip = false;
axios.defaults.withCredentials = true;
Vue.use(VueAxios, axios);
Vue.use(ElementUI);
Vue.filter("currency", Currency);
Vue.use(VueCookies);
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);
Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');


extend('required', {
  validate (value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1
    };
  },
  computesRequired: true
});


router.beforeEach(function (to, from, next) {
  if (to.meta.requiresAuth) {
    console.log('這裡需要驗證');
    axios.post('https://vue-course-api.hexschool.io/api/user/check').then((response) => {
      if (response.data.success === true) {
        console.log('驗證成功');
        next();
      } else {
        console.log('驗證失敗');
        next('/login')
      }
    });
  } else {
    console.log('無須驗證');
    next();
  } // end of requiresAuth
  if ((from.name === 'product_details') || (from.name === 'checkout')) {
    if (to.name !== 'checkout') {
      store.dispatch('clearSin  gleProduct');
    }
  }
})
