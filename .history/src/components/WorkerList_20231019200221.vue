<template>
  <div></div>
</template>

<script>
export default {
  name: 'WorkerList',

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
