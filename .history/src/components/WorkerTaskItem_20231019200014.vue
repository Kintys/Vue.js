<template>
  <div class="task-container">
    <div>{{ task.title }}</div>
    <div>
      <button @click="$emit('delete')">x</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkerTaskItem',

  props: {
    task: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="css" scoped>
.task-containe {
  display: flex;
  justify-content: space-between;
  border: 2ps solid green;
  height: 20px;
  margin: 10px;
}
</style>
