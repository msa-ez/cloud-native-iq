import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';

import '@mdi/font/css/materialdesignicons.css'

Vue.prototype.$bus = new Vue();

require('./style.css')

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app');
