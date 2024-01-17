import { helpersFunc } from './helpers/helpersFunc'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useLaptopListStore } from './laptop'

const { changeObjectToArr, isNewFilterObject } = helpersFunc()

export const useCatalogStore = defineStore('catalog', () => {
    const { loadFilteredList } = useLaptopListStore()
    const filterValueObject = ref({})

    function addFilterValueObject(obj) {
        filterValueObject.value = { ...filterValueObject.value, ...obj }
    }
    function deleteFilterValue(name) {
        filterValueObject.value = isNewFilterObject(filterValueObject, name)
    }
    function clearFilterValue() {
        filterValueObject.value = {}
    }

    function loadFilterList() {
        if (filterValueObject.value) {
            loadFilteredList({
                firstOpt: ['category', 'in', [...filterValueObject.value?.filterValue] ?? ''],
                secondOpt: ['color', '==', filterValueObject.value.colorValue],
                thirdOpt: ['brand', '==', filterValueObject.value.brandValue ?? ''],
                fourthOpt: ['currentPrice', '<=', filterValueObject.value.selectedPriceValue ?? '']
            })
        } else return
    }
    const getFilterValueList = computed(() => changeObjectToArr(filterValueObject))

    return {
        addFilterValueObject,
        filterValueObject,
        deleteFilterValue,
        clearFilterValue,
        getFilterValueList,
        loadFilterList
    }
})
