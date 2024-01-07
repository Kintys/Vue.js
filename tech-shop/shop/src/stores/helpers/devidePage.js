export const dividedintoPagesitemList = function (arr) {
    let count = 0
    return arr.map((item, index) => {
        if (index % 20 === 0) count++
        return { ...item, pageNumber: count }
    })
}
