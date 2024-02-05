import { helpersFunc } from './helpers/helpersFunc'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useLaptopListStore } from './laptop'
import { useMonitorsStore } from './monitoris'
import { usePcListStore } from './pcList'

const { isNewFilterObject, isFilteredList, dividedIntoPagesItemList, sortItemListWithParams } = helpersFunc()

export const useCatalogStore = defineStore('catalog', () => {
    const { loadItemsList: loadLaptopList, loadItemById: loadLaptopItemById } = useLaptopListStore()
    const { loadItemsList: loadMonitorsList, loadItemById: loadMonitorItemById } = useMonitorsStore()
    const { loadItemsList: LoadPcList, loadItemById: loadPcListItemById } = usePcListStore()

    const filterValueObject = ref({})
    const sortListObject = ref({ isSelectedStyle: true, numberPage: 15 })
    const catalogList = ref(null)
    const currentItem = ref(null)

    async function loadCatalogList() {
        const pcList = await LoadPcList()
        const laptopList = await loadLaptopList()
        const monitorsList = await loadMonitorsList()
        catalogList.value = [...pcList, ...laptopList, ...monitorsList]
    }
    function addSortListObject(obj) {
        sortListObject.value = { ...sortListObject.value, ...obj }
    }
    async function loadCatalogItemById(id) {
        currentItem.value = null
        await loadLaptopItemById(id).then((item) => {
            if (item && item.title) currentItem.value = item
            else return
        })
        await loadMonitorItemById(id).then((item) => {
            if (item && item.title) currentItem.value = item
            else return
        })

        await loadPcListItemById(id).then((item) => {
            if (item && item.title) currentItem.value = item
            else return
        })
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

    const getCatalogList = computed(() => catalogList?.value)

    const getCurrentItem = computed(() => currentItem.value)

    const getFilteredCatalogList = computed(() =>
        catalogList?.value?.filter((product) => isFilteredList(product, filterValueObject?.value))
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
    const getPriceList = computed(() =>
        getFilteredCatalogList?.value.reduce(
            (acc, item) => {
                if (item.currentPrice > 600) acc.hightPrice++
                if (item.currentPrice <= 600) acc.priceUpTo600++
                if (item.currentPrice <= 500) acc.priceUpTo500++
                else acc.priceUpTo400++
                return acc
            },
            {
                priceUpTo400: 0,
                priceUpTo500: 0,
                priceUpTo600: 0,
                hightPrice: 0
            }
        )
    )
    const getStyleValue = computed(() => sortListObject.value.isSelectedStyle)

    const getCurrentColor = computed(() => catalogList?.value?.map((item) => item.color).flat())

    return {
        addFilterValueObject,
        filterValueObject,
        deleteFilterValue,
        clearFilterValue,
        getCatalogList,
        getFilteredCatalogList,
        addSortListObject,
        getItemListWithPageNumber,
        getPageNumbers,
        getStyleValue,
        getCurrentColor,
        loadCatalogList,
        catalogList,
        loadCatalogItemById,
        getCurrentItem,
        currentItem,
        getPriceList
    }
})
