import { VinNumber } from '@/data/2_VIN_Number'
import { v4 as uuidv4 } from 'uuid'
export default {
    namespaced: true,
    state: {
        busList: null,
    },
    getters: {
        getBusList: (state) => state.busList,
        getBusItemByid: (state) => (busId) => {
            return state.busList.find((bus) => bus.id === busId)
        },
    },
    mutations: {
        updateBusList(state, busList) {
            const copyList = JSON.parse(JSON.stringify(busList))
            state.busList = copyList
        },
        editBusItem(state, busObj) {
            const foundIndex = state.busList.findIndex((bus) => bus.id === busObj.id)
            state.busList[foundIndex] = { ...busObj }
        },
        setNewItemToBusList(state, busObject) {
            state.busList.push(busObject)
        },
        deleteItem(state, id) {
            state.busList = state.busList.filter((bus) => bus.id !== id)
        },
    },
    actions: {
        loadBusList({ commit }) {
            commit('updateBusList', VinNumber)
        },
        changeBusItem({ commit }, busObject) {
            commit('editBusItem', busObject)
        },
        addNewItem({ commit }, busObj) {
            commit('setNewItemToBusList', {
                id: uuidv4(),
                ...busObj,
            })
        },
        deleteBusItem({ commit, dispatch }, id) {
            commit('deleteItem', id)
            dispatch('assigment/deleteBus', id, { root: true })
        },
    },
}
