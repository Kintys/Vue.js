import { isArray } from '@vue/shared'
export function helpersFunc() {
    function dividedIntoPagesItemList(arr, pageNumber) {
        let count = 0
        return arr.map((item, index) => {
            if (index % pageNumber === 0) count++
            return { ...item, pageNumber: count }
        })
    }
    function sortItemListWithParams(arr, sortVal) {
        return sortVal ? arr.sort((a, b) => b[sortVal] - a[sortVal]) : arr
    }
    function isNewFilterObject(obj, filterValue) {
        const newArr = []
        for (const key in obj.value) {
            if (isArray(obj.value[key])) {
                newArr.push(...obj.value[key].filter((item) => item !== filterValue))
            } else newArr.push(...Object.values(obj.value).filter((item) => item !== filterValue))
        }
        return newArr
    }
    function changeObjectToArr(obj) {
        const newArr = []
        for (const key in obj.value) {
            isArray(obj.value[key]) ? newArr.push(...obj.value[key]) : newArr.push(obj.value[key])
        }
        return newArr
    }
    function isFilteredList(productList, filterObj) {
        for (const props in filterObj) {
            const params = filterObj[props].every((value) => {
                if (Array.isArray(productList[props])) return productList[props].includes(...filterObj[props])
                else return value === productList[props]
            })

            if (filterObj[props] && !params) return false
        }
        return true
    }

    return { dividedIntoPagesItemList, isNewFilterObject, changeObjectToArr, sortItemListWithParams, isFilteredList }
}
