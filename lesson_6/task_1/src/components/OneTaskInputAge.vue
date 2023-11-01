<template>
  <div class="container">
    <label>
      {{ title }}
      <input
        :class="{
          'error-age': checkAge,
          [currentColor]: currentValue && currentValue < 150,
        }"
        type="number"
        v-model="currentValue"
      />
    </label>
    <div v-if="checkAge">Введений вік некоректний (> 150)</div>
  </div>
</template>

<script>
export default {
  name: "OneTaskInput",
  props: {
    title: { type: String, default: "" },
    modelValue: { type: Number },
    modelModifiers: {
      default: () => ({}),
    },
    data() {
      return {
        checkAge: null,
        currentColor: false,
      };
    },
  },

  computed: {
    currentValue: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        if (this.modelModifiers.check && newValue) {
          //   this.isCheckAge = this.isAgeVerification(newValue);
          this.checkAge = newValue > 150 ? true : false;
        }
        if (this.modelModifiers.setColor && newValue) {
          this.currentColor = this.isCurrentClass(newValue);
        }
        this.$emit("update:modelValue", newValue);
      },
    },
  },
  methods: {
    // isAgeVerification(age) {
    //   return age > 150;
    // },
    isCurrentClass(age) {
      if (age < 10) return "green";
      else if (age < 21) return "yellow";
      else if (age < 150) return "orange";
      return false;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  .error-age {
    background-color: red;
  }
  .green {
    background-color: green;
  }
  .yellow {
    background-color: yellow;
  }
  .orange {
    background-color: orange;
  }
}
</style>
