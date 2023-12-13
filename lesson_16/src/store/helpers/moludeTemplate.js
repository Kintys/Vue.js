import DbOperations from '../helpers/DbOperations'

export function getModuleTemplate(modulName, dataName) {
    const collectionDB = new DbOperations(dataName)
    return {
        namespaced: true,
        state: {
            [dataName]: null,
        },
        getters: {
            [`get${modulName}List`]: (state) => state[dataName],
            [`get${modulName}ById`]: (state) => (id) => {
                return state[dataName].find((element) => element.id === id)
            },
        },
        mutations: {
            [`set${modulName}List`](state, itemsList) {
                state[dataName] = itemsList
            },

            [`delete${modulName}Item`](state, itemId) {
                state[dataName] = state[dataName].filter((item) => item.id !== itemId)
            },
        },
        actions: {
            [`load${modulName}List`]({ commit, dispatch }) {
                dispatch('addError', null, { root: true })
                dispatch('addLoading', true, { root: true })
                collectionDB
                    .loadItemsList()
                    .then((list) => {
                        commit(`set${modulName}List`, list)
                    })
                    .catch((error) => {
                        dispatch('addError', error, { root: true })
                    })
                    .finally(() => {
                        dispatch('addLoading', false, { root: true })
                    })
            },
            [`add${modulName}Item`]({ dispatch }, item) {
                dispatch('addError', null, { root: true })
                dispatch('addLoading', true, { root: true })
                collectionDB
                    .addItem(item)
                    .then(() => {
                        dispatch(`load${modulName}List`)
                    })
                    .catch((error) => {
                        dispatch('addError', error, { root: true })
                    })
                    .finally(() => {
                        dispatch('addLoading', false, { root: true })
                    })
            },
            // [`delete${modulName}Value`]({ commit, dispatch }, { docId, itemId }) {
            //     dispatch('addError', { root: true })
            //     dispatch('addLoading', true, { root: true })

            //     collectionDB
            //         .deleteField(docId, itemId)
            //         .then(() => {
            //             commit(`delete${modulName}Item`, itemId)
            //             // dispatch('loadList')
            //         })
            //         .catch((error) => {
            //             dispatch('addError', error, { root: true })
            //         })
            //         .finally(() => {
            //             dispatch('addLoading', false, { root: true })
            //         })
            // },
            [`delete${modulName}`]({ commit, dispatch }, itemId) {
                dispatch('addError', null, { root: true })
                dispatch('addLoading', true, { root: true })

                collectionDB
                    .deleteItem(itemId)
                    .then(() => {
                        commit(`delete${modulName}Item`, itemId)
                        // dispatch('loadList')
                    })
                    .catch((error) => {
                        dispatch('addError', error, { root: true })
                    })
                    .finally(() => {
                        dispatch('addLoading', false, { root: true })
                    })
            },
            [`update${modulName}`]({ dispatch }, { itemId, data }) {
                dispatch('addError', null, { root: true })
                dispatch('addLoading', true, { root: true })

                collectionDB
                    .updateItem(itemId, data)
                    .then(() => {
                        dispatch(`load${modulName}List`)
                    })
                    .catch((error) => {
                        dispatch('addError', error, { root: true })
                    })
                    .finally(() => {
                        dispatch('addLoading', false, { root: true })
                    })
            },
            [`load${modulName}FilteredData`]({ commit, dispatch }, { fieldTitle, compareOperator, valueToCompare }) {
                dispatch('addError', null, { root: true })
                dispatch('addLoading', true, { root: true })
                collectionDB
                    .loadFilteredData(fieldTitle, compareOperator, valueToCompare)
                    .then((list) => {
                        commit(`set${modulName}List`, list)
                    })
                    .catch((error) => {
                        dispatch('addError', error, { root: true })
                    })
                    .finally(() => {
                        dispatch('addLoading', false, { root: true })
                    })
            },
        },
    }
}
