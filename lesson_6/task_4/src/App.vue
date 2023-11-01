<template>
  <div class="container">
    <!-- Задача 4. Розробити компонент для вводу віку користувача та імені. Робити форматування при заданні відповідних модифікаторів відповідних полів input:
            ⦁	ім’я користувача -  у випадку порожнього поля (червони фон) 
            ⦁	вік (вік менший за 18 – колір фону червоний, інакше – зелений).-->
    <fourth-task-name-age-user-input
      v-model:age.checkAge="user.age"
      v-model:name.empty="user.name"
    />
  </div>
</template>
<script>
import FourthTaskNameAgeUserInput from "./components/FourthTaskNameAgeUserInput.vue";

export default {
  name: "App",
  components: {
    FourthTaskNameAgeUserInput,
  },
  data() {
    return {
      user: {
        name: null,
        age: null,
      },
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
