<template>
  <div class="container">
    <div class="body-task-title">{{ taskItem.title }}</div>
    <button class="body-button" type="button" @click="$emit('delete')">
      X
    </button>
  </div>
</template>

<script>
export default {
  name: "TaskPerformerItem",
  props: {
    taskItem: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="css" scoped>
.container {
  display: flex;
  max-width: 240px;
  justify-content: space-between;
  border: 1px solid black;
  padding: 3px;
  border-radius: 5px;
}
.body-task-title {
  color: rgb(128, 0, 128);
  font-size: 18px;
}
.body-button {
  color: red;
  background-color: rgba(255, 255, 0, 0.432);
  border-radius: 5px;
}
</style>
