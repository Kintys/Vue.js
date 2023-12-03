export function getModuleTemplate(modulName, list) {
    return {
        namespaced: true,
        state: {
            [modulName]: list,
        },
        getters: {
            [`get${modulName}ItemById`]: (state) => (id) => {
                return state[modulName].find((item) => item.id === id)
            },
            [`get${modulName}List`]: (state) => state[modulName],
        },
        mutations: {
            [`add${modulName}List`](state, newList) {
                const copyList = JSON.parse(JSON.stringify(newList))
                state[modulName] = copyList
            },
        },
        actions: {
            [`load${modulName}List`]({ commit }) {
                commit(`add${modulName}`, list)
            },
        },
    }
}
