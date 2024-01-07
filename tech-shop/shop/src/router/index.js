import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/catalog',
            name: 'catalog',
            component: () => import('@/views/CatalogPage/CatalogPageMain.vue')
        },
        {
            path: '/editor',
            name: 'editor',
            component: () => import('../components/EditorPage.vue')
        },
        {
            path: '/login',
            children: [
                {
                    path: '',
                    name: 'login',
                    component: () => import('../views/LoginPage/LoginView.vue')
                },
                {
                    path: '/login/create',
                    name: 'create',
                    component: () => import('../views/LoginPage/CreateAccountPage.vue')
                }
            ]
        }
    ]
})

export default router
