<template>
  <div></div>
</template>

<script>
export default {
  name: 'TaskManager',

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
