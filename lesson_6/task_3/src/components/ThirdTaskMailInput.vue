<template>
  <div class="container">
    <label>
      {{ title }}
      <input
        :class="{
          'error-mail': currentMail && errorMailColor,
          'correct-mail': currentMail && !errorMailColor,
        }"
        type="text"
        v-model="currentMail"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "ThirdTaskMailInput",

  props: {
    mailDataList: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
    },
    modelModifiers: { default: () => ({}) },
  },
  data() {
    return {
      errorMailColor: false,
    };
  },
  computed: {
    currentMail: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        const checkMail = this.mailDataList.some(
          (mail) => mail.name === newValue
        );
        console.log(checkMail);

        if (this.modelModifiers.edu && newValue) {
          if (checkMail) newValue = `${newValue}@inv.mn.edu`;
          this.errorMailColor = false;
        }
        if (this.modelModifiers.check && newValue) {
          if (!checkMail) this.errorMailColor = true;
        }
        this.$emit("update:modelValue", newValue);
      },
    },
  },
  methods: {},
};
</script>

<style lang="css" scoped>
.error-mail {
  background-color: red;
}
.correct-mail {
  background-color: green;
}
</style>
