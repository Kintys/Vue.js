import { createRouter, createWebHistory } from 'vue-router'
import CompanyManager from '@/views/CompanyManager.vue'
import AboutValue from '@/views/AboutValue.vue'
import MyContacts from '@/views/MyContacts.vue'
import CompanyEditor from '@/views/CompanyEditor.vue'
const routes = [
    {
        path: '/',
        name: 'company',
        component: CompanyManager,
    },
    {
        path: '/editor/:id?',
        name: 'editor',
        component: CompanyEditor,
    },
    {
        path: '/aboutValue',
        name: 'aboutValue',
        component: AboutValue,
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: MyContacts,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
