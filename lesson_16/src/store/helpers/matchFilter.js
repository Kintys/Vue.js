export function isMatchFilter(driver, filter) {
    if (filter.title) {
        if (!driver.title.toLowerCase().includes(filter.title.toLowerCase())) return false
    }
    if (filter.expMin) {
        if (filter.expMin > driver.property) return false
    }
    if (filter.expMax) {
        if (filter.expMax < driver.property) return false
    }
    return true
}
