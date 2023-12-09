import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            requireAuth: false,
        },
    },
    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '../views/LoginPage'),
        meta: {
            requireAuth: false,
        },
    },
    {
        path: '/not-auth',
        name: 'notAuth',
        component: () => import(/* webpackChunkName: "not-login" */ '@/components/AuthPage.vue'),
        meta: {
            requireAuth: false,
        },
    },
    {
        path: '/product',
        name: 'product',
        component: () => import(/* webpackChunkName: "product" */ '@/views/ProductView.vue'),
        children: [
            {
                path: 'filter',
                name: 'filter',
                components: {
                    default: () => import(/* webpackChunkName: "product" */ '@/views/ProductView.vue'),
                    filter: () => import(/* webpackChunkName: "filter" */ '@/views/FilterView.vue'),
                },
                meta: {
                    requireAuth: true,
                },
            },
            {
                path: 'editor',
                name: 'editor',
                components: {
                    default: () => import(/* webpackChunkName: "product" */ '@/views/ProductView.vue'),
                    editor: () => import(/* webpackChunkName: "editor" */ '@/views/EditorView.vue'),
                },
                meta: {
                    requireAuth: true,
                },
            },
        ],
        meta: {
            requireAuth: true,
        },
    },
    {
        path: '/suppliers',
        name: 'suppliers',
        component: () => import(/* webpackChunkName: "provider" */ '../views/SuppliersView'),
        meta: {
            requireAuth: true,
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
    {
        path: '/contacts',
        name: 'contacts',
        component: () => import(/* webpackChunkName: "contacts" */ '@/views/ContactsView.vue'),
        meta: {
            requireAuth: true,
        },
    },
    {
        path: '/rules',
        name: 'rules',
        component: () => import(/* webpackChunkName: "rules" */ '../views/ShoppingRules.vue'),
        meta: {
            requireAuth: true,
        },
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})
router.beforeEach((to) => {
    const authParams = localStorage.getItem('user')
    if (to.meta.requireAuth && !authParams)
        return {
            name: 'notAuth',
        }
})
export default router
