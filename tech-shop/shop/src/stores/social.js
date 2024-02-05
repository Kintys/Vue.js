import { defineStore } from 'pinia'
import getStoreTemplate from './helpers/storeTemplate'

export const useSocialListStore = defineStore('socialList', () => {
    return getStoreTemplate('socialList')
})
