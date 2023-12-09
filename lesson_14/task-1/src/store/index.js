import { createStore } from 'vuex'
import product from './modules/product'
import suppliers from './modules/suppliers'
import gallery from './modules/gallery'
export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: { product, suppliers, gallery },
})
