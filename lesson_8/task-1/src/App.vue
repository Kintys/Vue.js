<template>
  <shop-manager />
</template>

<script>
import { mapGetters } from "vuex";
import ShopManager from "@/components/ShopManager";
export default {
  name: "App",
  components: {
    ShopManager,
  },
  computed: {
    ...mapGetters(["showCategoryAndProductList"]),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
