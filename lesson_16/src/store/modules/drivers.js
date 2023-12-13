import { getModuleTemplate } from '@/store/helpers/moludeTemplate'
import { isMatchFilter } from '@/store/helpers/matchFilter'
const driver = getModuleTemplate('Drivers', 'driverList')
driver.state.filter = {}
;(driver.getters.getFilteredDriverList = (state) => {
    return state.driverList.filter((driver) => isMatchFilter(driver, state.filter))
}),
    (driver.mutations.setFilterData = (state, filterData) => {
        state.filter = filterData
    }),
    (driver.actions.upDateFilterData = ({ commit }, filterObj) => {
        commit('setFilterData', filterObj)
    })
export default driver
