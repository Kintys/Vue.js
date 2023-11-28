import { v4 as uuidv4 } from 'uuid'

export default {
    namespaced: true,
    state: {
        assignmentsList: [],
    },
    getters: {
        getAssigmentList(state, getters, rootState, rootGetters) {
            return state.assignmentsList.map((item) => {
                const foundTeacher = rootGetters['teachers/getFindTeacherById'](item.teacherId)
                const foundLesson = rootGetters['lessons/getFindLessonById'](item.lessonId)
                return {
                    id: item.id,
                    teacherName: foundTeacher.teacherName,
                    specialization: foundTeacher.specialization,
                    hours: item.lessonTime,
                    subject: foundLesson.subject,
                    classTitle: foundLesson.classTitle,
                }
            })
        },
        getFindAssigmentElementById: (state, getters) => (id) => {
            return getters.getAssigmentList.find((element) => element.id === id)
        },
    },
    mutations: {
        setAssigmentObj(state, assigmentObj) {
            state.assignmentsList.push({ ...assigmentObj })
        },
        deleteAssigment(state, someId) {
            state.assignmentsList = state.assignmentsList.filter((item) => {
                item.id !== someId || item.teacherId !== someId || item.lessonId !== someId
            })
        },
        upDateAssigment(state, assigmentObj) {
            const index = state.assignmentsList.findIndex((element) => element.id === assigmentObj.id)
            state.assignmentsList[index] = assigmentObj
        },
    },
    actions: {
        deleteAggigmetById({ commit }, someId) {
            commit('deleteAssigment', someId)
        },
        upDateAssigmentItem({ commit }, assigmentObj) {
            console.log(assigmentObj)
            commit('upDateAssigment', assigmentObj)
        },
        addNewAssigment({ commit }, assigmentObj) {
            commit('setAssigmentObj', {
                ...assigmentObj,
                id: uuidv4(),
            })
        },
    },
}
