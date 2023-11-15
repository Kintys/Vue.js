<template>
  <div class="container">
    <product-item
      v-for="product in getProductList"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductItem from "@/components/ShopManager/ProductItem.vue";
export default {
  name: "ProductList",
  components: {
    ProductItem,
  },
  computed: {
    ...mapGetters(["getProductList"]),
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 420px 420px;
  gap: 10px;
}
</style>
