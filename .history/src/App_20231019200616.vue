<template>
  <worker-list :workerData="workersList[0]" :workerTasksData="tasksList" />
</template>

<script>
import WorkerList from './components/WorkerList.vue'
import { workersList, tasksList } from './constants/6_tasks_devider'

export default {
  name: 'App',
  components: {
    WorkerList,
  },

  data() {
    return {
      tasksList,
      workersList,
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
