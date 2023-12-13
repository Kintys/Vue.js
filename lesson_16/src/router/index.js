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
        path: '/drivers',
        name: 'drivers',
        component: () => import(/* webpackChunkName: "drivers" */ '@/views/DriversView.vue'),
        meta: {
            requireAuth: true,
        },
    },
    {
        path: '/bus',
        name: 'bus',
        component: () => import(/* webpackChunkName: "Bus" */ '@/views/BusView.vue'),
        meta: {
            requireAuth: true,
        },
    },
    {
        path: '/assigment',
        name: 'assigment',
        component: () => import(/* webpackChunkName: "assigment" */ '@/views/AssigmentView.vue'),
        meta: {
            requireAuth: true,
        },
    },
    {
        path: '/editor:id?:busEdit?',
        name: 'editor',
        component: () => import(/* webpackChunkName: "editor" */ '@/views/EditorView.vue'),
        meta: {
            requireAuth: true,
        },
    },

    {
        path: '/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "login" */ '@/views/LoginPage.vue'),
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
router.beforeEach((to) => {
    const authParams = localStorage.getItem('user')
    if (to.meta.requireAuth && !authParams)
        return {
            name: 'notAuth',
        }
})
export default router
