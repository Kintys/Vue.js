import { createStore } from 'vuex'
import { autoDataList } from '@/data/auto_data_list.js'
import { getAllItemList, getFoundItemList, getFilteredItemListWithParams } from './helpers'

export default createStore({
    state: {
        carList: null,
        newItemList: null,
        selectedParameter: null,
    },
    getters: {
        getCategoryList(state) {
            return state.carList.map((category) => ({
                id: category.id,
                titleCategory: category.titleCategory,
            }))
        },
        getParametersItemList(state) {
            return (parameter) => {
                return [...new Set(state.newItemList.map((value) => value[parameter]))]
            }
        },

        getFilterList(state) {
            if (state.selectedParameter) {
                let filteredListWithParams
                if (state.selectedParameter.color) {
                    filteredListWithParams = getFilteredItemListWithParams(
                        state.newItemList,
                        'color',
                        state.selectedParameter.color
                    )
                }
                if (state.selectedParameter.mark) {
                    filteredListWithParams = getFilteredItemListWithParams(
                        state.newItemList,
                        'mark',
                        state.selectedParameter.mark
                    )
                }
                if (state.selectedParameter.year) {
                    filteredListWithParams = getFilteredItemListWithParams(
                        state.newItemList,
                        'year',
                        state.selectedParameter.year
                    )
                }
                return filteredListWithParams
            } else return getAllItemList(state.carList)
        },
    },

    mutations: {
        setLoadData(state, dataList) {
            const copyData = JSON.parse(JSON.stringify(dataList))
            state.carList = copyData
        },
        setSelectedParameters(state, params) {
            state.newItemList = getFoundItemList(state.carList, params.categoryId)
            state.selectedParameter = params
        },
    },
    actions: {
        loadData(context) {
            context.commit('setLoadData', autoDataList)
        },
        selectedParameter(context, params) {
            context.commit('setSelectedParameters', params)
        },
    },
    modules: {},
})
