import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeachersList from '../views/TeachersList'
import SubjectsList from '../views/SubjectsList'
import AssigmentsList from '../views/AssigmentsList'
import AddToAssigmentList from '@/components/AddToAssigmentList'
import TeacherEditView from '../views/TeacherEditView'
import SubjectEditor from '../views/SubjectEditor'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/teachers',
        name: 'teachers',
        component: TeachersList,
    },
    {
        path: '/subjects',
        name: 'subjects',
        component: SubjectsList,
    },
    {
        path: '/assigment',
        name: 'assigment',
        component: AssigmentsList,
    },
    {
        path: '/addAssigment:id?',
        name: 'addAssigment',
        component: AddToAssigmentList,
    },

    {
        path: '/teacherEd:id?',
        name: 'teacherEd',
        component: TeacherEditView,
    },
    {
        path: '/subjectEd:id?',
        name: 'subjectEd',
        component: SubjectEditor,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
