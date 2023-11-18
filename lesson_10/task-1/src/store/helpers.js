export function isFilteredList(laptop, filterObj) {
    for (const props in filterObj) {
        const params = filterObj[props].every((value) => value === laptop[props])
        if (filterObj[props] && !params) return false
    }
    return true
}
