<template>
  <div>
    <task-selector :tasksList="tasksData" :workersList="workerData" />
  </div>
</template>

<script>
import TaskSelector from './TaskSelector.vue'
export default {
  name: 'TaskManager',

  components: { TaskSelector },

  props: {
    tasksData: {
      type: Array,
      required: true,
    },
    workerData: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
