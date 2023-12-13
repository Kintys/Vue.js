export function getFoundItem(nameList, id, keyName) {
    return nameList.find((item) => item[keyName] === id)
}
