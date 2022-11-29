import { createRouter, createWebHistory } from 'vue-router';
import store from '../store/store';
import blogRoutes from './blog/routes';

const routes = [
    {
        path: '/',
        name: 'main',
        component: () => import('../pages/Main.vue'),
        meta: {
            layout: 'Main',
            auth: true,
        }
    },

    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/Login.vue'),
        meta: {
            layout: 'Empty'
        }
    },

    blogRoutes,

    {
        path: '/:notFound(.*)',
        name: '404',
        component: () => import('../pages/404.vue'),
        meta: {
            layout: 'Empty'
        }
    }
];

const router = createRouter({
    history: createWebHistory('/admin/'),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
});

router.beforeEach((to, from, next) => {
    const requireAuth = to.matched.some((record) => record.meta.auth);
    if (requireAuth && !store.getters['auth/IS_AUTH']) {
        next({ name: 'login' });
    } else if (to.name == 'login' && store.getters['auth/IS_AUTH']) {
        next({ name: 'main' });
    } else {
        next();
    }
});

export default router;
