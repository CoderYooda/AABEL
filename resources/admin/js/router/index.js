import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/admin',
        name: 'home',
        component: () => import('../components/pages/Home.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    base: '/admin/',
    routes
});

export default router;
