<template>
  <div class="section">
    <fruits-product-panel :product-list-data="raspberryList" />
    <computer-panel-box :shop-card-list-data="notebooksList" />
  </div>
</template>

<script>
import ComputerPanelBox from "./components/ComputerPanelBox";
import FruitsProductPanel from "./components/FruitsProductPanel.vue";
// ================================
import { raspberryList } from "./constants/2_data_raspberry.js";
import { notebooksList } from "./constants/3_data_notebooks";
export default {
  name: "App",

  components: { FruitsProductPanel, ComputerPanelBox },

  data() {
    return { raspberryList, notebooksList };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  text-decoration: none;
}
.section {
  display: flex;
  flex-direction: column;
  gap: 50px;
}
</style>
