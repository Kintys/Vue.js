import { createStore } from 'vuex'
import { subjectList } from '@/data/2_schoolSubjects'
import { classesList } from '@/data/3_classes'
import teachers from '@/store/modules/teachers'
import assigment from '@/store/modules/assigment'
import lessons from '@/store/modules/lessons'
export default createStore({
    state: {
        subjectList: [],
        classesList: [],
    },
    getters: {
        getSubjectList(state) {
            return state.subjectList
        },
        getClassesList(state) {
            return state.classesList
        },
        getSubjectElementById: (state, getters) => (subjectId) => {
            return getters.getSubjectList.find((subject) => subject.id == subjectId)
        },
        getClassesElementById: (state, getters) => (classesId) => {
            return getters.getClassesList.find((classes) => classes.id == classesId)
        },
    },
    mutations: {
        upData(state, { subjectList, classesList }) {
            state.subjectList = [...subjectList]
            state.classesList = [...classesList]
        },
        setNewClass(state, classObj) {
            state.classesList.push({ ...classObj })
        },
    },
    actions: {
        loadData({ commit }) {
            commit('upData', {
                subjectList: subjectList,
                classesList: classesList,
            })
        },
        addNewClass({ commit }, classObj) {
            commit('setNewClass', classObj)
        },
    },
    modules: {
        teachers,
        lessons,
        assigment,
    },
})
