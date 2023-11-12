<template>
  <credit-card
    v-model:cardDate="userCardDate"
    v-model:cardNumber="userCardNumber"
  />
</template>

<script>
import CreditCard from "./components/CreditCard.vue";

export default {
  name: "App",
  components: { CreditCard },
  data() {
    return {
      userCardDate: null,
      userCardNumber: null,
    };
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
