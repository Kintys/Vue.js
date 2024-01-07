import { defineStore } from 'pinia'
import getStoreTemplate from './helpers/storeTemplate'

export const useMonitorsStore = defineStore('monitorsList', () => {
    return getStoreTemplate('monitorsList')
})
