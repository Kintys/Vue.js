export function getFoundItemList(carList, selectedIndex) {
    const foundIndex = carList.findIndex((category) => category.id === selectedIndex)
    return carList[foundIndex].itemList
}

export function getAllItemList(carList) {
    const newArr = carList.map(({ itemList }) => itemList)
    return newArr.flat(1)
}

export function getFilteredItemListWithParams(itemList, propTitle, filterValue) {
    return itemList.filter((item) => item[propTitle].includes(filterValue))
}
