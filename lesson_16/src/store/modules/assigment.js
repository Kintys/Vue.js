import { getModuleTemplate } from '@/store/helpers/moludeTemplate'
import { getFoundItem } from '@/store/helpers/findSomeItem'
let assigments = getModuleTemplate('Assigment', 'assigmentList')

assigments.getters.getAssigmentByDriverId = (state) => (driverId) => {
    return getFoundItem(state.assigmentList, driverId, 'driverId')
}
assigments.getters.getAssigmentByBusId = (state) => (busId) => {
    return getFoundItem(state.assigmentList, busId, 'busId')
}
assigments.getters.getAssigmentWithTitles = (state, getters, rootState, rootGetters) => {
    return state.assigmentList.map((assigment) => ({
        id: assigment.id,
        driver: rootGetters['drivers/getDriversById'](assigment.driverId).title,
        bus: rootGetters['bus/getBusById'](assigment.busId).title,
    }))
}

export default assigments
