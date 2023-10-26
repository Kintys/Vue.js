<template>
  <task-manager :tasksData="tasksList" :workersData="workersList" />
</template>

<script>
import TaskManager from './components/TaskManager.vue'
import { workersList, tasksList } from './constants/6_tasks_devider'

export default {
  name: 'App',
  components: {
    TaskManager,
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
