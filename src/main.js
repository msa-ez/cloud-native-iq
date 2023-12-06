import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import '@mdi/font/css/materialdesignicons.css'
import {Icon} from '@iconify/vue2';



Vue.component('Icon', Icon);
Vue.prototype.$bus = new Vue();

require('./style.css')

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
