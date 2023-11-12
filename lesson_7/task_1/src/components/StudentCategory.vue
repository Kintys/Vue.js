<template>
  <div>
    <h2>{{ title }}</h2>
    <select v-model="selectCategory">
      <option value="5">Відмінник</option>
      <option value="4">Хорошист</option>
      <option value="3">Трійочник</option>
      <option value="2">Двійочник</option>
      <option value="6">Блатник</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "StudentCategory",
  props: { title: { type: String } },
  data() {
    return {
      selectCategory: null,
    };
  },
  watch: {
    selectCategory(newValue) {
      console.log(newValue);
      this.selectedStudentCategory(newValue);
    },
  },
  methods: {
    ...mapActions(["selectedStudentCategory"]),
  },
};
</script>

<style lang="scss" scoped></style>
