// router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import main from '../components/main.vue';
import User from '../components/spider/User.vue'

Vue.use(VueRouter);

const routes = [
      {
            path: '/',
            name: 'main',
            component: main,
      },
      {
            path: '/user',
            name: 'User',
            component: User,
      },
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
