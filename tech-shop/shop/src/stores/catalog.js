import { helpersFunc } from './helpers/helpersFunc'
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useLaptopListStore } from './laptop'
import { useMonitorsStore } from './monitoris'
import { usePcListStore } from './pcList'
import { useGeneralStore } from '@/stores/general'

const { isNewFilterObject, isFilteredList, dividedIntoPagesItemList, sortItemListWithParams } = helpersFunc()

export const useCatalogStore = defineStore('catalog', () => {
    const { getItemsList: laptopList, loadItemById: loadLaptopItem, getCurrentItem: laptopItem } = useLaptopListStore()
    const {
        getItemsList: monitorsList,
        loadItemById: loadMonitorsItem,
        getCurrentItem: monitorsItem
    } = useMonitorsStore()
    const { getItemsList: pcList, loadItemById: loadPcItem, getCurrentItem: pcItem } = usePcListStore()
    const { setLoading, startLoading } = useGeneralStore()

    const filterValueObject = ref({})
    const sortListObject = ref({ isSelectedStyle: true, numberPage: 15 })
    const catalogList = ref(null)
    const currentItem = ref(null)
    async function addNewList() {
        return [...laptopList]
    }
    async function loadCatalogList() {
        try {
            startLoading(true)
            catalogList.value = await addNewList()
        } finally {
            setLoading(false)
        }
    }

    function addSortListObject(obj) {
        sortListObject.value = { ...sortListObject.value, ...obj }
    }
    function loadItemById(id) {
        console.log(id)
        currentItem.value = catalogList.value.find((product) => product.id === id)
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

    const getCurrentItemById = computed(() => {
        return (id) => {
            console.log(id)
            catalogList?.value.find((product) => product.id === id)
        }
    })
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
        loadItemById,
        getCurrentItem,
        getCurrentItemById
    }
})
