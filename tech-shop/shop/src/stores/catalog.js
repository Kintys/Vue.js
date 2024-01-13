import { helpersFunc } from './helpers/helpersFunc'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

const { changeObjectToArr, isNewFilterObject } = helpersFunc()

export const useCatalogStore = defineStore('catalog', () => {
    const filterValueObject = ref({})
    const sortListObject = ref({})
    function addSortListObject(obj) {
        sortListObject.value = { ...sortListObject.value, ...obj }
    }
    function addFilterValueObject(obj) {
        filterValueObject.value = { ...filterValueObject.value, ...obj }
    }
    function deleteFilterValue(name) {
        filterValueObject.value = isNewFilterObject(filterValueObject, name)
    }
    function clearFilterValue() {
        filterValueObject.value = {}
    }
    const getFilterValueList = computed(() => changeObjectToArr(filterValueObject))
    const getSortList = computed(() => sortListObject.value)
    return {
        getSortList,
        sortListObject,
        filterValueObject,
        deleteFilterValue,
        clearFilterValue,
        getFilterValueList,
        addFilterValueObject,
        addSortListObject
    }
})
