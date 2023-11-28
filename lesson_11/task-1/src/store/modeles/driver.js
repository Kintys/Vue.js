import { driverList } from '@/data/1_driverList'
import { v4 as uuidv4 } from 'uuid'
import { isMatchFilter } from '@/store/helpers.js'
export default {
    namespaced: true,
    state: {
        driverList: null,
        filter: {},
    },
    getters: {
        getDriverList(state) {
            return state.driverList
        },
        getFilteredDriverList: (state) => {
            return state.driverList.filter((driver) => isMatchFilter(driver, state.filter))
        },
        getDriverById: (state) => (driverId) => {
            return state.driverList.find((driver) => driver.id === driverId)
        },
    },
    mutations: {
        updateDriverList(state, drivList) {
            const copyList = JSON.parse(JSON.stringify(drivList))
            state.driverList = copyList
        },
        setFilterData(state, filterData) {
            state.filter = filterData
        },
        editDriverVal(state, driverObj) {
            const foundIndex = state.driverList.findIndex((driver) => driver.id === driverObj.id)
            state.driverList[foundIndex] = { ...driverObj }
        },
        setNewDriver(state, driverObj) {
            state.driverList.push(driverObj)
        },
        deleteDriver(state, driverId) {
            state.driverList = state.driverList.filter((driver) => driver.id !== driverId)
        },
    },
    actions: {
        loadDriverList({ commit }) {
            commit('updateDriverList', driverList)
        },
        upDateFilterData({ commit }, filterObj) {
            commit('setFilterData', filterObj)
        },
        changeDriverValue({ commit }, driverObj) {
            commit('editDriverVal', driverObj)
        },
        addNewDriverItem({ commit }, driverObj) {
            commit('setNewDriver', {
                id: uuidv4(),
                ...driverObj,
            })
        },
        deleteDriverItem({ commit, dispatch }, id) {
            commit('deleteDriver', id)
            dispatch('assigment/deleteDriver', id, { root: true })
        },
    },
}
