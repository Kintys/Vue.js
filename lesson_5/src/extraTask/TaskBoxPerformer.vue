<template>
  <div v-if="isTaskList" class="worker-container">
    <h2 class="worker-title">Виконавець {{ workerData.name }}</h2>
    <task-performer-item
      v-for="task in taskListPerformer"
      :key="task.id"
      :task-performer-item="task"
      @delete="$emit('delete', task.id)"
    />
  </div>
</template>

<script>
import TaskPerformerItem from "./TaskPerformerItem.vue";

export default {
  name: "TaskBoxPerformer",
  components: { TaskPerformerItem },

  props: {
    workerData: {
      type: Object,
      required: true,
    },
    taskListPerformer: {
      type: Array,
      required: true,
    },
  },

  computed: {
    isTaskList() {
      return this.taskListPerformer.length > 0;
    },
  },
};
</script>

<style lang="css" scoped>
.worker-container {
  max-width: 320px;
  padding: 10px;
  border: 2px solid black;
}
.worker-title {
  border-bottom: 2px solid black;
  padding: 10px;
}
</style>
