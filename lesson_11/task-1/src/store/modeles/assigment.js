import { v4 as uuidv4 } from 'uuid'
export default {
    namespaced: true,
    state: {
        assigmentList: [],
    },
    getters: {
        getAssigmentList(state, getters, rootState, rootGetters) {
            return state.assigmentList.map((assigment) => ({
                id: assigment.id,
                driver: rootGetters['driver/getDriverById'](assigment.driverId).title,
                bus: rootGetters['bus/getBusItemByid'](assigment.busId).title,
            }))
        },
    },
    mutations: {
        setAssigmentAction(state, assigmObj) {
            state.assigmentList.push(assigmObj)
        },
        deleteBus(state, id) {
            state.assigmentList = state.assigmentList.filter((bus) => bus.busId !== id)
        },

        deleteDriver(state, id) {
            state.assigmentList = state.assigmentList.filter((driver) => driver.driverId !== id)
        },
        deleteAssigment(state, id) {
            state.assigmentList = state.assigmentList.filter((assigment) => assigment.id !== id)
        },
    },
    actions: {
        deleteAssigmentByBusId({ commit }, busId) {
            commit('deleteBus', busId)
        },
        deleteAssigmentByDriverId({ commit }, driverId) {
            commit('deleteDriver', driverId)
        },
        deleteAssigmetById({ commit }, assigmentId) {
            commit('deleteAssigment', assigmentId)
        },
        addAssigmentAction({ commit }, assigmentObject) {
            commit('setAssigmentAction', {
                id: uuidv4(),
                ...assigmentObject,
            })
        },
    },
}
