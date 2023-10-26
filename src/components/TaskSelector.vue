<template>
  <div>
    <h1>Розподілювач задач</h1>
    <h2>Задачі:</h2>
    <task-selector-item
      v-for="task in tasksList"
      :key="task.id"
      :task="task"
      :workersList="workersList"
      @selected="onSelect($event, task.id)"
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

  methods: {
    onSelect(workerId, taskId) {
      this.$emit('selected', {
        taskId: taskId,
        workerId: workerId,
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
