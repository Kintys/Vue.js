<template>
  <div class="container">
    <five-task-product
      :product-data-list="dataListProduct"
      :brand-list="dataBrandList"
      :seller-list="dataSellerList"
    />
  </div>
</template>
<script>
import FiveTaskProduct from "./components/FiveTaskProduct";

import { laptopList, brandList } from "./data/2_data_laptopList.js";

import { sellerList } from "./data/3_data_seller.js";
export default {
  name: "App",
  components: {
    FiveTaskProduct,
  },
  data() {
    return {
      dataListProduct: laptopList,
      dataSellerList: sellerList,
      dataBrandList: brandList,
    };
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
