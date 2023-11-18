import { createStore } from 'vuex'
import brand from './modeles/brand'
import seller from './modeles/seller'
import laptop from './modeles/laptop'
import shoppingCard from './modeles/shoppingCard'
export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        brand,
        seller,
        laptop,
        card: shoppingCard,
    },
})
