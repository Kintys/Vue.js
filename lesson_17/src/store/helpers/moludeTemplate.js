import DbOperations from '../helpers/DbOperations'

export function getModuleTemplate(modulName, dataName) {
    const collectionDB = new DbOperations(dataName)
    return {
        namespaced: true,
        state: {
            [dataName]: null,

            loading: false,
            error: null,
        },
        getters: {
            [`get${modulName}List`]: (state) => state[dataName],
            [`get${modulName}ById`]: (state) => (id) => {
                return state[dataName].find((element) => element.id === id)
            },
            isLoading: (state) => state.loading,
            hasError: (state) => state.error,
        },
        mutations: {
            [`set${modulName}List`](state, itemsList) {
                state[dataName] = itemsList
            },

            [`delete${modulName}Item`](state, itemId) {
                state[dataName] = state[dataName].filter((item) => item.id !== itemId)
            },
            setLoading(state, value) {
                state.loading = value
            },
            setError(state, error) {
                state.error = error
            },
        },
        actions: {
            [`load${modulName}List`]({ commit }) {
                commit('setError', null)
                commit('setLoading', true)
                collectionDB
                    .loadItemsList()
                    .then((list) => {
                        commit(`set${modulName}List`, list)
                    })
                    .catch((error) => {
                        commit('setError', error)
                    })
                    .finally(() => {
                        commit('setLoading', false)
                    })
            },
            [`add${modulName}Item`]({ commit, dispatch }, item) {
                commit('setError', null)
                commit('setLoading', true)
                collectionDB
                    .addItem(item)
                    .then(() => {
                        dispatch(`load${modulName}List`)
                    })
                    .catch((error) => {
                        commit('setError', error)
                    })
                    .finally(() => {
                        commit('setLoading', false)
                    })
            },
            [`delete${modulName}`]({ commit }, itemId) {
                commit('setError', null)
                commit('setLoading', true)
                collectionDB
                    .deleteItem(itemId)
                    .then(() => {
                        commit(`delete${modulName}Item`, itemId)
                        // dispatch('loadList')
                    })
                    .catch((error) => {
                        commit('setError', error)
                    })
                    .finally(() => {
                        commit('setLoading', false)
                    })
            },
            [`update${modulName}`]({ commit, dispatch }, { itemId, data }) {
                commit('setError', null)
                commit('setLoading', true)

                collectionDB
                    .updateItem(itemId, data)
                    .then(() => {
                        dispatch(`load${modulName}List`)
                    })
                    .catch((error) => {
                        commit('setError', error)
                    })
                    .finally(() => {
                        commit('setLoading', false)
                    })
            },
            [`load${modulName}FilteredData`]({ commit }, { fieldTitle, compareOperator, valueToCompare }) {
                commit('setError', null)
                commit('setLoading', true)
                collectionDB
                    .loadFilteredData(fieldTitle, compareOperator, valueToCompare)
                    .then((list) => {
                        commit(`set${modulName}List`, list)
                    })
                    .catch((error) => {
                        commit('setError', error)
                    })
                    .finally(() => {
                        commit('setLoading', false)
                    })
            },
        },
    }
}
