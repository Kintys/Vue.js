import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            requiredAuth: false,
        },
    },
    {
        path: '/not-auth',
        name: 'not-auth',
        component: () => import(/* webpackChunkName: "not-auth" */ '@/components/AuthPage.vue'),
        meta: {
            requiredAuth: false,
        },
    },
    {
        path: '/product',
        name: 'product',
        component: () => import(/* webpackChunkName: "product" */ '@/views/ProductView.vue'),
        meta: {
            requiredAuth: false,
        },
    },
    {
        path: '/editor:id?',
        name: 'editor',
        component: () => import(/* webpackChunkName: "editor" */ '@/views/EditorView.vue'),
        meta: {
            requireAuth: false,
        },
    },
    {
        path: '/card',
        name: 'card',
        component: () => import(/* webpackChunkName: "card" */ '@/views/CardView.vue'),
        meta: {
            requireAuth: false,
        },
    },

    {
        path: '/:pathMatch(.*)*',
        name: 'pageNotFound',
        component: () =>
            import(
                /* webpackChunkName: "Page-Not-Found" */
                '../views/PageNotFound.vue'
            ),
        meta: {
            requireAuth: false,
        },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})
router.beforeEach(async (to) => {
    if (to.meta?.requiredAuth) {
        let isAuthenticated = store.state.auth.user

        if (!isAuthenticated) isAuthenticated = await store.dispatch('auth/loginWithCredential')

        if (!isAuthenticated)
            return {
                name: 'not-auth',
            }
    }
})

export default router
