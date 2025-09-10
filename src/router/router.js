import { createRouter, createWebHistory } from 'vue-router';
import IndexHome from '../pages/home/IndexHome.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: IndexHome,
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router;