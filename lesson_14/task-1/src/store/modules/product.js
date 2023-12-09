import { getModuleTemplate } from '../helpers'
import { productList } from '@/data/1_productList'
let productVuexData = getModuleTemplate('Product', productList)
productVuexData.getters.getProductFilteredList = (state) => (filterValue) => {
    if (filterValue) return state.Product.filter((element) => element.title.includes(filterValue))
    else return state.Product
}

export default productVuexData
