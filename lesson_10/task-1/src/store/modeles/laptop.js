import { laptopListData } from '@/data/2_data_laptopList'
import { isFilteredList } from '@/store/helpers.js'
export default {
    namespaced: true,
    state: {
        laptopList: null,
        filterObject: null,
    },

    getters: {
        getLaptopList: ({ laptopList }) => laptopList,
        getFilteredLaptopList: (state) => {
            return state.laptopList.filter((laptop) => isFilteredList(laptop, state.filterObject))
        },
        getProductById: (state) => {
            return (currentId) => {
                return state.laptopList.find((product) => product.id === currentId)
            }
        },
    },
    mutations: {
        addLaptopList(state, arrLaptopList) {
            state.laptopList = [...arrLaptopList]
        },
        setFilterValue(state, filter) {
            state.filterObject = filter
        },
    },
    actions: {
        loadLaptop({ commit }) {
            commit('addLaptopList', laptopListData)
        },
        addFilterValue({ commit }, filterVal) {
            commit('setFilterValue', filterVal)
        },
    },
}
