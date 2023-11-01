<template>
  <div class="container">
    <!--  Задача 1. Розробити компонент для введення віку користувача (з підтримкою v-model). При заданні модифікатора check не допускати введення некоректного віку (вік не може бути більшим за 150). При заданні модифікатора setColor задавати фон (вік менше 10 – зелений, від 10 до 21 – жовтий, інакше – оранжевий).  -->

    <one-task-input-age title="User Age" v-model.check.setColor="ageValue" />
  </div>
</template>
<script>
import OneTaskInputAge from "./components/OneTaskInputAge.vue";
export default {
  name: "App",
  components: {
    OneTaskInputAge,
  },
  data() {
    return {
      ageValue: null,
    };
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
