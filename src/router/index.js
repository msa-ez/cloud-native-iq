// router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import main from '../components/main.vue';
import Step from '../components/spider/step/Step.vue'
import User from '../components/spider/User.vue'
import GetTheGuide from '../components/spider/step/GetTheGuide'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'main',
        component: main,
    },
    {
        path: '/:name_en',
        name: 'User',
        component: User,
        props: true,
    },
    {
        path: '/GetTheGuide/:tabName/level:levelNumber',
        component: User,
        props: true,
    }
];

const router = new VueRouter({
    mode: 'hash',
    routes
});

export default router;
