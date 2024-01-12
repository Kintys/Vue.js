import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCatalogStore = defineStore('catalog', () => {
    const filterValue = ref(null)
    const colorValue = ref(null)
    const sortValue = ref(null)
    const showPageSelectValue = ref(null)
    const brandValue = ref(null)

    function addFilterValue(value) {
        filterValue.value = value
    }
    function addSortValue(value) {
        sortValue.value = value
    }
    function addShowPageSelectValue(value) {
        showPageSelectValue.value = value
    }
    function addBrandValue(value) {
        showPageSelectValue.value = value
    }
    function changeColorValue(value) {
        colorValue.value = value
    }
    function deleteFilterValue(name) {
        filterValue.value = filterValue.value.filter((item) => item !== name)
    }

    function clearFilterValue() {
        filterValue.value = null
    }
    const getFilterValueList = computed(() => filterValue.value ?? [])

    return {
        filterValue,
        colorValue,
        sortValue,
        showPageSelectValue,
        addSortValue,
        addBrandValue,
        addShowPageSelectValue,
        addFilterValue,
        deleteFilterValue,
        clearFilterValue,
        changeColorValue,
        getFilterValueList
    }
})
