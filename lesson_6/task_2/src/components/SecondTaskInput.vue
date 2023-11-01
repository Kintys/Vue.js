<template>
  <div class="container">
    <label>
      {{ title }}
      <input
        type="text"
        v-model="currentValue"
        :class="{ 'error-path': addClass && currentValue }"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "SecondTaskInput",
  props: {
    title: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      required: true,
    },
    modelModifiers: {
      default: () => ({}),
    },
  },
  data() {
    return {
      addClass: "",
    };
  },

  computed: {
    currentValue: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        if (this.modelModifiers.checkPath && newValue) {
          this.addClass = newValue.includes(".js") ? false : true;
        }
        this.$emit("update:modelValue", newValue);
      },
    },
  },
};
</script>

<style lang="css" scoped>
.error-path {
  background-color: red;
}
</style>
