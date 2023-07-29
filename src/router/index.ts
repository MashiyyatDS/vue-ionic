import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import HomePage from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login.vue'),
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('@/views/profile.vue'),
    },
    {
        path: '/settings',
        name: 'Settings',
        component: () => import('@/views/settings.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router
