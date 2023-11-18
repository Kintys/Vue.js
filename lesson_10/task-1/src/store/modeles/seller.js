import { sellerList } from '@/data/3_data_seller'

export default {
    namespaced: true,
    state: {
        sellerList: null,
    },
    getters: {
        getSellerList: (state) => {
            return state.sellerList
        },
    },
    mutations: {
        addSellersList(state, sellerArr) {
            state.sellerList = [...sellerArr]
        },
    },
    actions: {
        loadSellers({ commit }) {
            commit('addSellersList', sellerList)
        },
    },
}
