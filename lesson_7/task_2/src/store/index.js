import { createStore } from "vuex";
import productListData from "@/data/productListData";
import { v4 as uuidv4 } from "uuid";
import { currencyList } from "@/data/settings.js";
import { getFindProduct, getNewArr } from "@/data/helpers.js";
export default createStore({
  state: {
    productList: null,
    currencyList: null,
    currentRate: null,
    buyList: [],
  },
  getters: {
    getProductListWithChooseRate(state) {
      if (state.currentRate) {
        return getNewArr(
          state.currencyList,
          state.currentRate,
          state.productList
        );
      }
      return state.productList;
    },
    getTotalSumBuyList(state) {
      const totalSum = state.buyList.reduce((prevValue, element) => {
        const amount = element.count * element.price;
        return (prevValue += amount);
      }, 0);
      return (totalSum * (state.currentRate ?? 1)).toFixed(2);
    },
    getBuyListWithChooseRate(state) {
      if (state.currentRate) {
        return getNewArr(state.currencyList, state.currentRate, state.buyList);
      }
      return state.buyList;
    },
    getCurrencyList: ({ currencyList }) => currencyList,
  },
  mutations: {
    addProductList(state, productListData) {
      let copyData = JSON.parse(JSON.stringify(productListData));
      state.productList = copyData.map((element) => ({
        ...element,
        id: uuidv4(),
      }));
    },
    addCurrencyList(state, currencyList) {
      state.currencyList = currencyList;
    },

    addRate(state, rate) {
      state.currentRate = rate;
    },
    addProductToBuyList(state, productId) {
      const foundProduct = getFindProduct(state.buyList, productId);
      if (foundProduct) {
        foundProduct.count++;
      } else {
        const newFoundProductToProductList = getFindProduct(
          state.productList,
          productId
        );
        state.buyList.push(newFoundProductToProductList);
      }
    },
    addProductCount(state, productId) {
      const foundProduct = getFindProduct(state.buyList, productId);
      foundProduct.count++;
    },
    subtractProductCount(state, productId) {
      const foundProduct = getFindProduct(state.buyList, productId);
      if (foundProduct.count === 1) return foundProduct.count;
      else foundProduct.count--;
    },
    deleteProductToBuyList(state, productId) {
      state.buyList = state.buyList.filter(
        (element) => element.id !== productId
      );
    },
  },
  actions: {
    loadProductData(context) {
      context.commit("addProductList", productListData);
    },
    loadCurrencyList({ commit }) {
      commit("addCurrencyList", currencyList);
    },
    setNewRate({ commit }, rate) {
      commit("addRate", rate);
    },
    setProductToBuyList({ commit }, productId) {
      commit("addProductToBuyList", productId);
    },
    onDeleteProductToBuyList(context, productId) {
      context.commit("deleteProductToBuyList", productId);
    },
    setAdditionProductCount(context, productId) {
      context.commit("addProductCount", productId);
    },
    setSubtractionProductCount(context, productId) {
      context.commit("subtractProductCount", productId);
    },
  },
  modules: {},
});
