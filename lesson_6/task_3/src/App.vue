<template>
  <div class="container">
    <!-- Задача 3. Розробити компонент (з підтримкою v-model), який дозволяє вводити e-mail з домену “edu” (приклад: ivan-hopko@inv.mn.edu). Частинка «@inv.mn.edu» додається автоматично (користувач не вводить її). При заданні модифікатора check відображати червоним фоном input, якщо некоректний.-->

    <div class="mail">
      <third-task-mail-input
        title="enter your mail(test mail 'ivan')"
        :mail-data-list="dataMail"
        v-model.check.edu="mailValue"
      />
    </div>
  </div>
</template>
<script>
import ThirdTaskMailInput from "./components/ThirdTaskMailInput.vue";

import { mailData } from "./data/mailData.js";

export default {
  name: "App",
  components: {
    ThirdTaskMailInput,
  },
  data() {
    return {
      mailValue: null,
      dataMail: mailData,
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
