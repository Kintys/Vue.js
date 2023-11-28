import { teacherList } from '@/data/1_teachers'
import { subjectList } from '@/data/2_schoolSubjects'
import { v4 as uuidv4 } from 'uuid'
export default {
    namespaced: true,
    state: {
        teacherList: [],
    },
    getters: {
        getTeacherList: (state, getters, rootState, rootGetters) => {
            return state.teacherList.map((teacher) => ({
                id: teacher.id,
                teacherName: teacher.teacherName,
                specialization: rootGetters['getSubjectElementById'](teacher.subjectId).subject,
            }))
        },
        getFindTeacherById: (state, getters) => (teacherId) => {
            return getters.getTeacherList.find((teacher) => teacher.id === teacherId)
        },
        getTeacherNameById: (state, getters) => (teacherId) => {
            const foundTeacher = getters.getTeacherList.find((teacher) => teacher.id == teacherId)
            console.log(foundTeacher)
            return {
                id: foundTeacher.id,
                teacherName: foundTeacher.teacherName,
            }
        },
    },
    mutations: {
        updateTeacherList(state, list) {
            state.teacherList = list.teachers.map((teachers, index) => ({
                id: teachers.id,
                teacherName: teachers.teacherName,
                subjectId: list.subject[index].id,
            }))
        },
        deleteTeacher(state, teacherId) {
            state.teacherList = state.teacherList.filter((teacher) => teacher.id !== teacherId)
        },
        upDateTeacher(state, teacherObj) {
            const index = state.teacherList.findIndex((element) => element.id === teacherObj.id)
            state.teacherList[index] = teacherObj
        },
        addTeacher(state, teacherObj) {
            state.teacherList.push({ ...teacherObj })
        },
    },
    actions: {
        deleteTeacherById({ commit, dispatch }, teacherId) {
            commit('deleteTeacher', teacherId), dispatch('assigment/deleteAggigmetById', teacherId, { root: true })
        },
        upDateTeacherToTeacherList({ commit }, teacherObj) {
            commit('upDateTeacher', teacherObj)
        },
        addTeacherToTeacherList({ commit }, teacherObj) {
            commit('addTeacher', {
                id: uuidv4(),
                ...teacherObj,
            })
        },
        loadTeacherList({ commit }) {
            commit('updateTeacherList', {
                teachers: teacherList,
                subject: subjectList,
            })
        },
    },
}
