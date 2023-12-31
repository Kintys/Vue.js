import DbOperations from './DbOperations'
import { useGeneralStore } from '../general'
import { ref, computed } from 'vue'
import { dividedintoPagesitemList } from './devidePage'

export default function getStoreTemplate(collectionTitle) {
    const collectionDB = new DbOperations(collectionTitle)
    const { generalApiOperation } = useGeneralStore()
    const itemsList = ref(null)
    const currentItem = ref(null)
    const itemsLimitedList = ref(null)

    async function loadItemsList() {
        const newArr = await generalApiOperation({
            operation: () => collectionDB.loadItemsList()
        })
        itemsList.value = dividedintoPagesitemList(newArr)
    }
    async function loadShortItemList(num) {
        itemsLimitedList.value = await generalApiOperation({
            operation: () => collectionDB.loadItemLimitedList(num)
        })
    }
    async function loadItemById(itemId) {
        currentItem.value = await generalApiOperation({
            operation: () => collectionDB.getItemById(itemId)
        })
        return currentItem.value
    }

    async function loadFilteredData(fieldTitle, compareOperator, valueToCompare) {
        itemsList.value = await generalApiOperation({
            operation: () => collectionDB.loadFilteredData(fieldTitle, compareOperator, valueToCompare)
        })
        return itemsList.value
    }

    async function loadDocumentsFromIdsList(idsList) {
        itemsList.value = await generalApiOperation({
            operation: () => collectionDB.loadDocumentsFromIdsList(idsList)
        })
        return itemsList.value
    }

    async function addItem(itemData) {
        currentItem.value = await generalApiOperation({
            operation: () => collectionDB.addItem(itemData)
        })
    }

    async function addItemToArray(id, arrayProperty, itemData) {
        currentItem.value = await generalApiOperation({
            operation: () => collectionDB.addItemToArray(id, arrayProperty, itemData)
        })
    }

    async function removeItemFromArray(id, arrayProperty, itemData) {
        currentItem.value = await generalApiOperation({
            operation: () => collectionDB.removeItemFromArray(id, arrayProperty, itemData)
        })
    }

    async function addItemWithCustomId({ id, data }) {
        currentItem.value = await generalApiOperation({
            operation: () => collectionDB.addItemWithCustomId(id, data)
        })
    }

    async function updateItem(id, data) {
        currentItem.value = await generalApiOperation({
            operation: () => collectionDB.updateItem(id, data)
        })
    }

    async function deleteItem(itemId) {
        await generalApiOperation({
            operation: () => collectionDB.deleteItem(itemId)
        })
        itemsList.value = itemsList.value.filter((item) => item.id !== itemId)
    }

    const getItemsList = computed(() => itemsList.value ?? [])
    const getCurrentItem = computed(() => currentItem.value)
    const getLimitedItemList = computed(() => itemsLimitedList.value ?? [])
    const getItemsListWithNumber = computed(() => {
        return (number) => (itemsLimitedList.value ?? []).slice(0, number)
    })

    const getItemListWithPageNumber = computed(() => {
        return (pageNumber) => itemsList?.value?.filter((item) => item.pageNumber === pageNumber)
    })
    const getPageNumbers = computed(() => itemsList?.value?.reduce((max, item) => Math.max(max, item.pageNumber), 0))

    return {
        loadItemsList,
        addItem,
        addItemWithCustomId,
        addItemToArray,
        removeItemFromArray,
        updateItem,
        deleteItem,
        getItemsList,
        loadItemById,
        loadFilteredData,
        getCurrentItem,
        loadDocumentsFromIdsList,
        loadShortItemList,
        getLimitedItemList,
        getItemsListWithNumber,
        getItemListWithPageNumber,
        getPageNumbers
    }
}
