import { helpersFunc } from './helpers/helpersFunc'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useLaptopListStore } from './laptop'
import { useMonitorsStore } from './monitoris'
import { usePcListStore } from './pcList'
import { useGeneralStore } from '@/stores/general'

const { changeObjectToArr, isNewFilterObject, isFilteredList, dividedIntoPagesItemList, sortItemListWithParams } =
    helpersFunc()

export const useCatalogStore = defineStore('catalog', () => {
    const { getItemsList: laptopList } = useLaptopListStore()
    const { getItemsList: monitorsList } = useMonitorsStore()
    const { getItemsList: pcList } = usePcListStore()
    const { generalApiOperation } = useGeneralStore()
    const filterValueObject = ref({})

    const sortListObject = ref({ isSelectedStyle: true, numberPage: 15 })

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

    const getCatalogList = computed(() => [...laptopList])

    const getFilterValueList = computed(() => changeObjectToArr(filterValueObject))
    const getFilteredCatalogList = computed(() =>
        getCatalogList.value.filter((product) => isFilteredList(product, filterValueObject?.value))
    )

    const getDividedAndSortList = computed(() => {
        const newArr = sortItemListWithParams(getFilteredCatalogList.value, sortListObject.value.sortValue)
        return dividedIntoPagesItemList(newArr ?? [], sortListObject.value.numberPage)
    })
    const getItemListWithPageNumber = computed(() => {
        return (pageNumber) => getDividedAndSortList.value.filter((item) => item.pageNumber === pageNumber)
    })
    const getPageNumbers = computed(() =>
        getDividedAndSortList.value.reduce((max, item) => Math.max(max, item.pageNumber), 0)
    )

    const getStyleValue = computed(() => sortListObject.value.isSelectedStyle)

    const getCurrentColor = computed(() => getCatalogList?.value.map((item) => item.color).flat())

    return {
        addFilterValueObject,
        filterValueObject,
        deleteFilterValue,
        clearFilterValue,
        getFilterValueList,
        getCatalogList,
        getFilteredCatalogList,
        addSortListObject,
        getItemListWithPageNumber,
        getPageNumbers,
        getStyleValue,
        getCurrentColor,
        getCategoryList
    }
})
