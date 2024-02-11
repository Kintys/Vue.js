import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

import { isAuthenticated, isRouteAvailable } from './helpers'

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
            component: () => import('@/views/CatalogPage/CatalogPageMain.vue'),
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/product:id',
            name: 'product',
            component: () => import('@/views/productPage/MainProductPage.vue'),
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/cart',
            name: 'cart',
            component: () => import('@/views/shoppingCartPage/MainShoppingCart.vue'),
            meta: {
                requireAuth: true
            }
        },
        {
            path: '/login',
            children: [
                {
                    path: '',
                    name: 'login',
                    component: () => import('../views/LoginPage/LoginView.vue'),
                    meta: {
                        requireAuth: false
                    }
                },
                {
                    path: '/login/create',
                    name: 'create',
                    component: () => import('../views/LoginPage/CreateAccountPage.vue'),
                    meta: {
                        requireAuth: false
                    }
                }
            ]
        },
        {
            path: '/:path(.*)*',
            name: 'pageNotFound',
            meta: {
                requireAuth: false
            },
            component: () => import('@/views/PageNotFound.vue')
        }
    ]
})
router.beforeEach(async (to) => {
    if (to.meta?.requireAuth) {
        if (!isAuthenticated())
            return {
                name: 'login'
            }
    }
})
export default router
