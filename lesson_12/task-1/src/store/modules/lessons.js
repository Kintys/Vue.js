import { subjectList } from '@/data/2_schoolSubjects'
import { classesList } from '@/data/3_classes'
import { v4 as uuidv4 } from 'uuid'

export default {
    namespaced: true,
    state: {
        lessonsList: [],
    },
    getters: {
        getLessonsList: (state, getters, rootState, rootGetters) => {
            return state.lessonsList.map((lesson) => {
                const foundObject = rootGetters['getSubjectElementById'](lesson.subjectId)
                return {
                    id: lesson.id,
                    subject: foundObject.subject,
                    classTitle: rootGetters['getClassesElementById'](lesson.classId).classesTitle,
                    hours: lesson.hours,
                }
            })
        },
        getFindLessonById: (state, getters) => (lessonId) => {
            return getters.getLessonsList.find((lesson) => lesson.id === lessonId)
        },
        getLessonIdById: (state, getters) => (lessonId) => {
            const foundLesson = getters.getLessonsList.find((lesson) => lesson.id == lessonId)
            return {
                id: foundLesson.id,
                hours: foundLesson.hours,
            }
        },
    },
    mutations: {
        updateLessonsList(state, list) {
            state.lessonsList = list.classes.map((classes, index) => ({
                id: uuidv4(),
                classId: classes.id,
                subjectId: list.subjects[index].id,
                hours: list.subjects[index].hours,
            }))
        },
        deleteLesson(state, lessonId) {
            state.lessonsList = state.lessonsList.filter((lesson) => lesson.id !== lessonId)
        },
        upDateLesson(state, lessonObj) {
            const index = state.lessonsList.findIndex((lesson) => lesson.id === lessonObj.id)
            state.lessonsList[index] = { ...lessonObj }
        },
        setNewLesson(state, lessonObj) {
            state.lessonsList.push({ ...lessonObj })
        },
    },
    actions: {
        deleteLessonById({ commit, dispatch }, lessonId) {
            commit('deleteLesson', lessonId)
            dispatch('assigment/deleteAggigmetById', lessonId, { root: true })
        },
        upDateLessonToLessonList({ commit }, lessonObj) {
            commit('upDateLesson', lessonObj)
        },
        addNewLesson({ commit, dispatch }, lessonObj) {
            const newId = uuidv4()
            commit('setNewLesson', {
                id: uuidv4(),
                classId: newId,
                ...lessonObj,
            }),
                dispatch('addNewClass', { id: newId, classesTitle: lessonObj.classTitle }, { root: true })
        },
        loadLessonsList({ commit }) {
            commit('updateLessonsList', {
                subjects: subjectList,
                classes: classesList,
            })
        },
    },
}
// dispatch('assigment/deleteBus', id, { root: true })
// addNewLesson({ commit, dispatch }, lessonObj) {
//             const newId = uuidv4()
//             dispatch(
//                 'addNewClass',
//                 {
//                     classId: newId,
//                     classesTitle: lessonObj.classTitle,
//                 },
//                 { root: true }
//             ),
//                 commit('setNewLesson', {
//                     id: uuidv4(),
//                     subjectId: lessonObj.subjectId,
//                     classId: newId,
//                     hours: lessonObj.hours,
//                 })
//         },
