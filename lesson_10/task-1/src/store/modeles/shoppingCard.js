import { v4 as uuidv4 } from 'uuid'
export default {
    namespaced: true,
    state: {
        cardList: [],
    },
    getters: {
        getShoppindCard: (state, getters, rootState, rootGetters) => {
            return state.cardList.map((newProduct) => ({
                cardId: newProduct.cardId,
                product: rootGetters['laptop/getProductById'](newProduct.productId),
            }))
        },
    },
    mutations: {
        deteteProduct(state, prodId) {
            state.cardList = state.cardList.filter((product) => product.cardId !== prodId)
        },
        addProductId(state, prodId) {
            state.cardList.push({
                cardId: uuidv4(),
                productId: prodId,
            })
        },
    },
    actions: {
        deleteProduct(context, productId) {
            context.commit('deteteProduct', productId)
        },
        addProductId({ commit }, id) {
            commit('addProductId', id)
        },
    },
}
