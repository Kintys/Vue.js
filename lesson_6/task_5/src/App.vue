<template>
  <div class="container">
    <five-task-product :product-data-list="dataListProduct" />
  </div>
</template>
<script>
import FiveTaskProduct from "./components/FiveTaskProduct";

import { laptopList } from "./data/2_data_laptopList.js";

export default {
  name: "App",
  components: {
    FiveTaskProduct,
  },
  data() {
    return {
      dataListProduct: laptopList,
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
