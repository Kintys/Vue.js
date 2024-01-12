import { defineStore } from 'pinia'
import getStoreTemplate from './helpers/storeTemplate'

export const useLaptopListStore = defineStore('laptopList', () => {
    return getStoreTemplate('laptopList')
})
