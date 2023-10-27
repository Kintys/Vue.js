<template>
  <div class="container">
    <div class="task-title">{{ taskItem.title }}</div>
    <div>
      <select v-model="selectedWorker">
        <option
          v-for="worker in workerItem"
          :key="worker.id"
          :value="worker.id"
        >
          {{ worker.name }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkerSelectItem",
  props: {
    workerItem: {
      type: Array,
      required: true,
    },
    taskItem: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selectedWorker: null,
    };
  },
  watch: {
    selectedWorker(newValue) {
      this.$emit("selected", newValue);
    },
  },
};
</script>

<style lang="scss" scoped></style>
