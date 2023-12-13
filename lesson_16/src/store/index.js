import { createStore } from 'vuex'
import drivers from '@/store/modules/drivers'
import bus from '@/store/modules/bus'
import assigment from '@/store/modules/assigment'
export default createStore({
    state: {
        loading: false,
        error: null,
    },
    getters: {
        isLoading: (state) => state.loading,
        hasError: (state) => state.error,
    },
    mutations: {
        setLoading(state, value) {
            state.loading = value
        },
        setError(state, error) {
            state.error = error
        },
    },
    actions: {
        addError({ commit }, error) {
            commit('setError', error)
        },
        addLoading({ commit }, error) {
            commit('setLoading', error)
        },
    },
    modules: { drivers, bus, assigment },
})
