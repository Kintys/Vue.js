<template>
  <div class="container">
    <h3>Корзина</h3>
    <div>
      <ol class="block">
        <li
          class="block-item"
          v-for="product in getBuyListWithChooseRate"
          :key="product.id"
        >
          <div>{{ product.title }}</div>
          <div class="block-price">
            <div class="block-count">
              <button
                type="button"
                @click="setSubtractionProductCount(product.id)"
              >
                -
              </button>
              {{ product.count }}
              <button
                type="button"
                @click="setAdditionProductCount(product.id)"
              >
                +
              </button>
            </div>
            {{ product.price }} {{ product.currencyTitle }}
            <button type="button" @click="onDeleteProductToBuyList(product.id)">
              Видалити
            </button>
          </div>
        </li>
      </ol>
    </div>
    <div class="block-sum">
      <h3>Разом до оплати</h3>
      <div>
        {{ getTotalSumBuyList }}
        {{ getProductListWithChooseRate[0].currencyTitle }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "BuyList",
  computed: {
    ...mapGetters([
      "getBuyListWithChooseRate",
      "getProductListWithChooseRate",
      "getTotalSumBuyList",
    ]),
  },
  methods: {
    ...mapActions([
      "setAdditionProductCount",
      "setSubtractionProductCount",
      "onDeleteProductToBuyList",
    ]),
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
  .block-sum {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
