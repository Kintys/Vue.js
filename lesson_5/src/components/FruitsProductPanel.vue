<template>
  <div class="container">
    <fruits-product-card
      v-for="product in productListData"
      :key="product.id"
      :productData="product"
    />
  </div>
</template>

<script>
import FruitsProductCard from "./FruitsProductCard.vue";

export default {
  name: "FruitsProductPanel",
  components: { FruitsProductCard },
  props: {
    productListData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="css" scoped>
.container {
  display: flex;
  justify-content: center;
  gap: 1.25rem;
}
</style>
