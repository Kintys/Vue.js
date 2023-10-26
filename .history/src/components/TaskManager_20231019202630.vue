<template>
  <div>
    <task-selector
      :tasksList="tasksData"
      :workersList="workerData"
      @select="onTaskSelected"
    />
  </div>
</template>

<script>
import TaskSelector from './TaskSelector.vue'
export default {
  name: 'TaskManager',

  components: { TaskSelector },

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

  data() {
    return {
      // selectedTasksObject:{
      //     //workerId:[taskId1 ,taskId2]
      //     5:[1,3],
      //     4:[2]
      // }
      selectedTasksList: [
        {
          workerId: 5,
          tasks: [1, 3],
        },
        {
          workerId: 4,
          tasks: [2],
        },
      ],
    }
  },

  methods: {
    onTaskSelected(selectedData) {},
  },
}
</script>

<style lang="scss" scoped></style>
