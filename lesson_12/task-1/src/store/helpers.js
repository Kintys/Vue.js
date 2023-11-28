export function getFoundObject(arr, id) {
    return arr.find((item) => item.id === id)
}
export function getRandomIndex(maxVal) {
    return Math.floor(Math.random() * maxVal)
}
