// router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import main from '../components/main.vue';
import Step from '../components/spider/step/Step.vue'
import User from '../components/spider/User.vue'

Vue.use(VueRouter);

const routes = [
      {
            path: '/',
            name: 'main',
            component: main,
      },
      {
            path: '/step',
            name: 'User',
            component: User,
      },
];

const router = new VueRouter({
    mode: 'hash',
    routes
});

export default router;
