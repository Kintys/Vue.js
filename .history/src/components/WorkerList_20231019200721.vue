<template>
  <div class="worker-container">
    <h1>Виконавець : {{ workerData.name }}</h1>
    <worker-task-item
      v-for="task in workerTasksData"
      :key="task.id"
      :task="task"
      @delete="$emit('delete', task.id)"
    />
  </div>
</template>

<script>
import WorkerTaskItem from './WorkerTaskItem.vue'

export default {
  name: 'WorkerList',

  components: { WorkerTaskItem },

  props: {
    workerData: {
      type: Object,
      required: true,
    },
    workerTasksData: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="css" scoped>
.worker-container {
  border: 2px solid blue;
}
</style>
