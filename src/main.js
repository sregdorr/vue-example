import 'bootstrap/dist/css/bootstrap.min.css'
import '@progress/kendo-ui';
import '@progress/kendo-theme-default/dist/all.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { GridInstaller } from "@progress/kendo-grid-vue-wrapper";

Vue.use(GridInstaller);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
