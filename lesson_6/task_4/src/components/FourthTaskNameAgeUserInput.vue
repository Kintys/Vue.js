<template>
  <div class="container">
    <label>
      User name
      <input
        ref="emptyName"
        :class="{ empty: validateName && !userName }"
        type="text"
        v-model="userName"
      />
    </label>
    <label>
      User age
      <input
        :class="{ [validateAge]: userAge }"
        type="number"
        v-model="userAge"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "FourthTaskNameAgeUserInput",
  props: {
    name: {
      type: String,
    },
    nameModifiers: {
      default: () => ({}),
    },
    age: {
      type: Number,
    },
    ageModifiers: { default: () => ({}) },
  },
  data() {
    return {
      validateName: false,
      validateAge: "",
    };
  },
  computed: {
    userName: {
      get() {
        return this.name;
      },
      set(val) {
        if (this.nameModifiers.empty && val) {
          this.validateName = true;
          this.$refs.emptyName.focus();
        }
        this.$emit("update:name", val);
      },
    },
    userAge: {
      get() {
        return this.age;
      },
      set(val) {
        if (this.ageModifiers.checkAge && val) {
          this.validateAge = val < 18 ? "mirror-user" : "correct-age";
        }
        this.$emit("update:age", val);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.empty {
  background-color: red;
}
.mirror-user {
  background-color: red;
}
.correct-age {
  background-color: green;
}
</style>
