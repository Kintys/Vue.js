import { createStore } from "vuex";
import { category_data } from "@/data/category_data.js";
import { v4 as uuidv4 } from "uuid";
export default createStore({
  state: {
    categoryList: null,
    selectedCategory: null,
  },
  getters: {
    showCategoryAndProductList: ({ categoryList }) => categoryList,
    getSelectedCategory(state) {
      return (selectId) => selectId === state.selectedCategory;
    },

    getProductList(state) {
      if (state.selectedCategory) {
        const foundProductList = state.categoryList.findIndex(
          (element) => element.id === state.selectedCategory
        );
        return state.categoryList[foundProductList].productList;
      } else return [];
    },
  },
  mutations: {
    addCategoryAndProductList(state, shopList) {
      const copyList = JSON.parse(JSON.stringify(shopList));
      copyList.forEach((element) => {
        element.id = uuidv4();
        element.productList.forEach((element) => (element.id = uuidv4()));
      });
      state.categoryList = copyList;
    },
    setCategoryId(state, catId) {
      state.selectedCategory = catId;
    },
  },
  actions: {
    loadData({ commit }) {
      commit("addCategoryAndProductList", category_data);
    },
    onSelectCategory({ commit }, catId) {
      commit("setCategoryId", catId);
    },
  },
  modules: {},
});
