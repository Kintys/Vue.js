<template>
  <div>
    <task-selector
      :tasksList="tasksData"
      :workersList="workersData"
      @select="onTaskSelected"
    />

    <worker-list
      v-for="workerData in selectedTasksList"
      :key="workerData.workerId"
      :workerData="getWorkerById(workerData.workerId)"
      :workerTasksData="getTasksByIdList(workerData.tasks)"
    />
  </div>
</template>

<script>
import TaskSelector from './TaskSelector.vue'
import WorkerList from './WorkerList.vue'
export default {
  name: 'TaskManager',

  components: { TaskSelector, WorkerList },

  props: {
    tasksData: {
      type: Array,
      required: true,
    },
    workersData: {
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
    getWorkerById(id) {
      return this.workersData.find((worker) => worker.id === id)
    },
    getTasksByIdList(tasksIdList) {
      return this.tasksData.filter((task) => tasksIdList.includes(task.id))
    },
    onTaskSelected(selectedData) {},
  },
}
</script>

<style lang="scss" scoped></style>
