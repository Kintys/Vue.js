<template>
  <div class="container">
    <h2>Валюта</h2>
    <select v-model="currentRate">
      <option
        v-for="currency in getCurrencyList"
        :key="currency.id"
        :value="currency.rate"
      >
        {{ currency.title }}
      </option>
    </select>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SelectedMoney",
  data() {
    return {
      currentRate: null,
    };
  },
  computed: {
    ...mapGetters(["getCurrencyList"]),
  },
  watch: {
    currentRate(newValue) {
      this.setNewRate(newValue);
    },
  },
  methods: {
    ...mapActions(["loadCurrencyList", "setNewRate"]),
  },

  created() {
    this.loadCurrencyList();
  },
};
</script>

<style lang="scss" scoped></style>
