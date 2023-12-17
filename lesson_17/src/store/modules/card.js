import { getModuleTemplate } from '@/store/helpers/moludeTemplate'
const cardList = getModuleTemplate('Card', 'cardList')
cardList.state.cardList = []
cardList.getters.getCardListById = (state, getters, rootState, rootGetters) => {
    if (state.cardList) {
        return state.cardList.map((product) => ({
            count: product.count,
            ...rootGetters['laptops/getLaptopsById'](product.productId),
        }))
    } else return null
}
cardList.mutations.setCountPlus = (state, productId) => {
    state.cardList.find((item) => item.productId === productId).count++
}
cardList.mutations.setCountMinus = (state, productId) => {
    state.cardList.find((item) => item.productId === productId).count--
}

cardList.mutations.deleteProductItem = (state, productId) => {
    state.cardList = state.cardList.filter((item) => item.productId !== productId)
}
cardList.actions.addCountProduct = ({ commit }, productId) => {
    commit('setCountPlus', productId)
}
cardList.actions.subtractCountProduct = ({ commit }, productId) => {
    commit('setCountMinus', productId)
}

cardList.actions.deleteProduct = ({ commit }, productId) => {
    commit('deleteProductItem', productId)
}
cardList.mutations.setNewProductId = (state, productId) => {
    const foundItem = state.cardList.find((item) => item.productId === productId)
    foundItem ? foundItem.count++ : state.cardList.push({ productId: productId, count: 1 })
}
cardList.actions.addProductToList = ({ commit }, productId) => {
    commit('setNewProductId', productId)
}
export default cardList
