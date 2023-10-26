<template>
  <div class="container-shop-list">
    <computer-shop-card
      v-for="card in shopCardListData"
      :key="card.id"
      :shop-card-data="card"
    />
  </div>
</template>

<script>
import ComputerShopCard from "./ComputerShopCard.vue";

export default {
  name: "computerPanelBox",
  components: { ComputerShopCard },
  props: {
    shopCardListData: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="css" scoped>
.container-shop-list {
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-left: 100px;
}
</style>
