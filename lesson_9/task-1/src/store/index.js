import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
export default createStore({
    state: {
        companyList: [
            { id: '1', company: 'ABC Inc.', rate: '30', year: '1990', owner: 'John Doe' },
            { id: '2', company: 'XYZ Corp.', rate: '25', year: '1995', owner: 'Jane Smith' },
            { id: '3', company: '123 Ltd.', rate: '28', year: '1993', owner: 'Bob Johnson' },
            { id: '4', company: 'Tech Solutions', rate: '35', year: '1988', owner: 'Alice Williams' },
            { id: '5', company: 'Global Innovations', rate: '32', year: '1989', owner: 'Charlie Brown' },
            { id: '6', company: 'Smart Systems', rate: '26', year: '1996', owner: 'Emily Davis' },
            { id: '7', company: 'Future Trends', rate: '31', year: '1991', owner: 'David Wilson' },
        ],
        filterValueObj: null,
    },
    getters: {
        getFilterCompanyList(state) {
            if (state.filterValueObj) {
                return state.companyList.filter((company) =>
                    company[state.filterValueObj.params].includes(state.filterValueObj.value)
                )
            } else return state.companyList
        },
        getFoundCompany(state) {
            return (companyId) => {
                return { ...state.companyList.find((company) => company.id == companyId) }
            }
        },
    },
    mutations: {
        setFilterValue(state, filter) {
            state.filterValueObj = filter
        },
        addNewCompany(state, newComp) {
            state.companyList.push({
                id: uuidv4(),
                ...newComp,
            })
        },
        setEditCompany(state, currentCompany) {
            const index = state.companyList.findIndex((company) => company.id == currentCompany.id)
            state.companyList[index] = { ...currentCompany }
        },
        deleteCompany(state, id) {
            const newList = state.companyList.filter((company) => company.id != id)
            state.companyList = newList
        },
    },
    actions: {
        filterValue({ commit }, filterObj) {
            commit('setFilterValue', filterObj)
        },
        newCopmany({ commit }, newCompany) {
            commit('addNewCompany', newCompany)
        },
        editCompany({ commit }, currentCompany) {
            commit('setEditCompany', currentCompany)
        },
        deleteCompany(context, companyId) {
            context.commit('deleteCompany', companyId)
        },
    },
    modules: {},
})
