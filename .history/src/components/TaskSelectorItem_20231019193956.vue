<template>
  <div class="container">
    <div>
      {{ task.title }}
    </div>
    <div>
      <select>
        <option
          v-for="worker in workersList"
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
  name: 'TaskSelectorItem',

  props: {
    task: {
      type: Object,
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
