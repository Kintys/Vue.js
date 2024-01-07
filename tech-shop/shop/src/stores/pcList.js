import { defineStore } from 'pinia'
import getStoreTemplate from './helpers/storeTemplate'

export const usePcListStore = defineStore('pcList', () => {
    return getStoreTemplate('pcList')
})
