<template>
  <div class="container">
    <div>
      {{ task.title }}
    </div>
    <div>
      <select v-model="selectedWorker">
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

  data() {
    return {
      selectedWorkerValue: null,
    }
  },

  computed: {
    selectedWorker: {
      get() {
        return this.selectedWorkerValue
      },
      set(workerId) {
        this.selectedWorkerValue = workerId
        this.$emit('selected', workerId)
      },
    },
  },
}
</script>

<style lang="scss" scoped></style>
