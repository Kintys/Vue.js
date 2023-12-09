export function getModuleTemplate(modulName, list) {
    return {
        namespaced: true,
        state: {
            [modulName]: list,
        },
        getters: {
            [`get${modulName}List`]: (state) => state[modulName],
            [`get${modulName}ById`]: (state) => (id) => {
                return state[modulName].find((element) => element.id === id)
            },
        },
        mutations: {
            [`addNew${modulName}`](state, newObj) {
                const foundIndex = state[modulName].findIndex((item) => item.id === newObj.id)
                state[modulName].splice(foundIndex, 1, { ...newObj })
            },
        },
        actions: {
            [`edit${modulName}`]({ commit }, obj) {
                commit(`addNew${modulName}`, obj)
            },
        },
    }
}
