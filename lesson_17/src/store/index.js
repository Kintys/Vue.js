import { createStore } from 'vuex'
import auth from '@/store/modules/auth'
import laptops from '@/store/modules/laptops'
import card from '@/store/modules/card'
import users from '@/store/modules/users'
export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: { auth, laptops, card, users },
})
