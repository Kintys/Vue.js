<template>
  <div class="container">
    <div>
      <h2>{{ title }}</h2>
      <select class="select" v-model="currentScoreCat">
        <option value="12">12</option>
        <option value="5">5</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ScoreCategory",
  props: {
    title: { type: String },
  },
  data() {
    return {
      currentScoreCat: null,
    };
  },
  watch: {
    currentScoreCat(newValue) {
      console.log(newValue);
      this.chooseScoreCat(newValue);
    },
  },
  methods: {
    ...mapActions(["chooseScoreCat"]),
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 200px;
  .select {
    width: 50px;
  }
}
</style>
