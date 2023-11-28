import { createStore } from 'vuex'
import driver from '@/store/modeles/driver'
import bus from '@/store/modeles/bus'
import assigment from '@/store/modeles/assigment'
export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        driver,
        bus,
        assigment,
    },
})
