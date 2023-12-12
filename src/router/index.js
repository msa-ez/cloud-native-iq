// router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import main from '../components/main.vue';
import Step from '../components/spider/step/Step.vue'
import User from '../components/spider/User.vue'
import CaseStudy from '../components/spider/CaseStudy.vue'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'main',
        component: main,
    },
    {
        path: '/get-the-guide/:tabName/level:levelNumber',
        component: User,
        props: true,
    },
    {
        path: '/get-the-guide/review-result',
        component: User,
        props: true,
    },
    {
        path: '/case-study',
        component: CaseStudy,
        props: true,
    },
    {
        path: '/:path',
        name: 'User',
        component: User,
        props: true,
    },
];

const router = new VueRouter({
    mode: 'hash',
    routes
});

export default router;
