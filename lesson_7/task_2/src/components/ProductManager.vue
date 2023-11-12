<template>
  <div class="container">
    <currency-selector />
    <div class="body-list">
      <product-list />
      <buy-list />
    </div>
  </div>
</template>

<script>
import CurrencySelector from "@/components/CurrencySelector.vue";
import ProductList from "@/components/ProductList.vue";
import { mapActions, mapGetters } from "vuex";
import BuyList from "@/components/BuyList.vue";
export default {
  name: "ProductManager",
  components: {
    CurrencySelector,
    ProductList,
    BuyList,
  },
  computed: {
    ...mapGetters(["getProductListWithChooseRate"]),
  },
  methods: {
    ...mapActions(["loadProductData"]),
  },

  created() {
    this.loadProductData();
  },
};
</script>

<style lang="scss" scoped>
.container {
  .body-list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: flex-start;
  }
}
</style>
