import { getModuleTemplate } from '@/store/helpers/moludeTemplate'
import { isFilteredList } from '../helpers/flterPrams'

const laptopList = getModuleTemplate('Laptops', 'laptopList')
laptopList.state.filterValue = null

laptopList.getters.getSellerList = (state) => {
    return [...new Set(state.laptopList.map((laptop) => laptop.seller))]
}
laptopList.getters.getBrandList = (state) => {
    return [...new Set(state.laptopList.map((laptop) => laptop.brand))]
}

;(laptopList.getters.getFilteredLaptopList = (state) => {
    return state.laptopList.filter((laptop) => isFilteredList(laptop, state.filterValue))
}),
    (laptopList.mutations.setFilter = (state, filterObj) => {
        state.filterValue = { ...filterObj }
    })
laptopList.actions.addFilterValue = ({ commit }, filterObj) => {
    commit('setFilter', filterObj)
}
export default laptopList
