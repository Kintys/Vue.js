import { laptopBrands } from '@/data/3_data_brand.js'

export default {
    namespaced: true,
    state: {
        brandList: null,
    },
    getters: {
        getBrandlist: ({ brandList }) => brandList,
    },
    mutations: {
        addNewList(state, arrLaptopBrands) {
            const copyArr = JSON.parse(JSON.stringify(arrLaptopBrands))
            state.brandList = copyArr
        },
    },
    actions: {
        loadBrand({ commit }) {
            commit('addNewList', laptopBrands)
        },
    },
    modules: {},
}
