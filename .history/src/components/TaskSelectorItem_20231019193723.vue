<template>
  <div></div>
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
