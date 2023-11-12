<template>
  <div class="container">
    <h3>Список продуктів</h3>
    <ol class="block">
      <li
        class="block-item"
        v-for="product in getProductListWithChooseRate"
        :key="product.id"
      >
        <div>{{ product.title }}</div>
        <div class="block-price">
          {{ product.price }} {{ product.currencyTitle }}
          <button type="button" @click="setProductToBuyList(product.id)">
            Купити
          </button>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ProductList",

  computed: {
    ...mapGetters(["getProductListWithChooseRate"]),
  },
  methods: {
    ...mapActions(["setProductToBuyList"]),
  },
};
</script>

<style lang="scss" scoped>
.container {
  padding: 20px;
  border: 2px solid black;
  width: 400px;
  .block {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .block-item {
    display: flex;
    justify-content: space-between;
  }
  .block-price {
    gap: 2px;
    display: flex;
  }
}
</style>
