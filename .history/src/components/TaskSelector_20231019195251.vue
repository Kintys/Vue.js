<template>
  <div>
    <h1>Розподілювач задач</h1>
    <h2>Задачі:</h2>
    <task-selector-item
      v-for="task in tasksList"
      :key="task.id"
      :task="task"
      :workersList="workersList"
    />
  </div>
</template>

<script>
import TaskSelectorItem from './TaskSelectorItem.vue'
export default {
  name: 'TaskSelector',

  components: { TaskSelectorItem },

  props: {
    tasksList: {
      type: Array,
      required: true,
    },
    workersList: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
