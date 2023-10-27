<template>
  <worker-selected-item
    v-for="itemTask in taskList"
    :key="itemTask.id"
    :task-item="itemTask"
    :worker-item="workerList"
    @selected="$emit($event, itemTask.id)"
  />
</template>

<script>
import WorkerListSelected from "./WorkerSelectItem";
export default {
  name: "WorkerListSelected",
  components: {
    WorkerListSelected,
  },
  props: {
    workerList: {
      type: Array,
      required: true,
    },
    taskList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
