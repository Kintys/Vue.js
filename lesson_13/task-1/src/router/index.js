import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        meta: {
            requireAuth: false,
        },
        component: HomeView,
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            requireAuth: false,
        },
        component: () =>
            import(
                /* webpackChunkName: "login" */
                '../views/LoginView'
            ),
    },
    {
        path: '/not-login',
        name: 'not-login',
        component: () => import(/* webpackChunkName: "not-login" */ '../components/AuthPage'),
    },
    {
        path: '/lessons',
        name: 'lessons',
        component: () =>
            import(
                /* webpackChunkName: "lessons" */
                '../views/LessonsView'
            ),
        meta: {
            requireAuth: true,
        },
        children: [
            {
                path: 'select',
                name: 'lesson-select',
                component: () =>
                    import(
                        /* webpackChunkName: "lessons-select" */
                        '../views/LessonSelectView.vue'
                    ),
                meta: {
                    requireAuth: true,
                },
            },
            {
                path: ':subjectId(\\w+)+',
                name: 'teachers-select',
                component: () =>
                    import(
                        /* webpackChunkName: "teachers-select" */
                        '../views/TeachersSelect.vue'
                    ),
                meta: {
                    requireAuth: true,
                },
            },
            {
                path: ':studyId(\\w+\\s\\w+)+',
                name: 'study-list',
                component: () =>
                    import(
                        /* webpackChunkName: "study-list" */
                        '../views/StudyPlan.vue'
                    ),
                meta: {
                    requireAuth: true,
                },
            },
        ],
    },
    {
        path: '/teachers',
        name: 'teachers',
        component: () =>
            import(
                /* webpackChunkName: "teachers" */
                '../views/TeachersView.vue'
            ),
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
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})
router.beforeEach((to) => {
    const authParams = localStorage.getItem('userLogin')
    if (to.meta.requireAuth && !authParams)
        return {
            name: 'not-login',
        }
})
export default router
