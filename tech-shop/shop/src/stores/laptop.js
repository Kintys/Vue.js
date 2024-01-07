import { defineStore } from 'pinia'
import getStoreTemplate from './helpers/storeTemplate'

export const uselaptopListStore = defineStore('laptopList', () => {
    return getStoreTemplate('laptopList')
})
