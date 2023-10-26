<template>
  <div>
    <h1>{{ workerData.name }}</h1>
    <worker-task-item />
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

<style lang="scss" scoped></style>
