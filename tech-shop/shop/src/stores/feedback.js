import { defineStore } from 'pinia'
import getStoreTemplate from './helpers/storeTemplate'

export const useFeedbackStore = defineStore('feedbackList', () => {
    return getStoreTemplate('feedbackList')
})
