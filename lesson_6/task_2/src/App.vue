<template>
  <div class="container">
    <!-- Задача 2. Розробити компонент (з підтримкою v-model), який дозволяє вводити шлях до файлу js (URL, що закінчується розширенням js). При заданні модифікатора checkPath відображати червоним фоном input, якщо шлях некоректний.-->

    <second-task-input title="User Url" v-model.checkPath="urlValue" />
  </div>
</template>
<script>
import SecondTaskInput from "./components/SecondTaskInput.vue";

export default {
  name: "App",
  components: {
    SecondTaskInput,
  },
  data() {
    return {
      urlValue: null,
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
