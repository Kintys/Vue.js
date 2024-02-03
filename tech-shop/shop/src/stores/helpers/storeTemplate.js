import DbOperations from './DbOperations'
import { useGeneralStore } from '../general'
import { ref, computed } from 'vue'

export default function getStoreTemplate(collectionTitle) {
    const collectionDB = new DbOperations(collectionTitle)
    const { generalApiOperation } = useGeneralStore()

    const itemsList = ref(null)
    const currentItem = ref(null)

    const sortListObject = ref({ isSelectedStyle: true, numberPage: 15 })

    function addSortListObject(obj) {
        sortListObject.value = { ...sortListObject.value, ...obj }
    }

    async function loadItemsList() {
        itemsList.value = await generalApiOperation({
            operation: () => collectionDB.loadItemsList()
        })
    }
    async function loadShortItemList(num) {
        itemsList.value = await generalApiOperation({
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
    async function loadFilteredList(obj) {
        itemsList.value = await generalApiOperation({
            operation: () => collectionDB.loadFilteredDataListWithParams(obj)
        })
    }

    const getItemsList = computed(() => itemsList.value)
    const getCurrentItem = computed(() => currentItem.value)

    const getItemsListWithNumber = computed(() => {
        return (number) => (getItemsList.value ?? []).slice(0, number)
    })
    return {
        sortListObject,
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
        getItemsListWithNumber,
        loadFilteredList,
        addSortListObject,
        itemsList
    }
}
