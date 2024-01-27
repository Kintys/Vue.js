export function useSeparateDotFunc() {
    function dividedString(value) {
        if (!value) return null
        let newVal = value.toString()
        return newVal.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
    return {
        dividedString
    }
}
