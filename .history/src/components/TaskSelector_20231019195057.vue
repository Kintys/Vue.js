<template>
  <div></div>
</template>

<script>
export default {
  name: 'TaskSelector',

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
