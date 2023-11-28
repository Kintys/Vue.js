import { createRouter, createWebHistory } from 'vue-router'
import DriverAndBusPages from '../views/DriverAndBusPages.vue'
import EditorValue from '../views/EditorValue.vue'
import HomeView from '../views/HomeView'
import AssigmentsView from '../views/AssigmentsView'
import ContactView from '@/views/ContactView'
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/driver:bus?',
        name: 'driverAndBus',
        component: DriverAndBusPages,
    },
    {
        path: '/editor:id?:busEdit?',
        name: 'editor',
        component: EditorValue,
    },
    {
        path: '/assigment',
        name: 'assigment',
        component: AssigmentsView,
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
