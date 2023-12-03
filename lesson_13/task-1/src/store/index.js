import { createStore } from 'vuex'
import subjects from '../store/modules/subjects'
import teachers from '../store/modules/teachers'
export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        subjects,
        teachers,
    },
})
