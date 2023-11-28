export function isMatchFilter(driver, filter) {
    if (filter.name) {
        if (!driver.title.toLowerCase().includes(filter.name.toLowerCase())) return false
    }
    if (filter.expMin) {
        if (filter.expMin > driver.proparty) return false
    }
    if (filter.expMax) {
        if (filter.expMax < driver.proparty) return false
    }
    return true
}
