<template>
  <div class="container">
    <div class="card-number">
      <div class="card-label">CARD NUMBER</div>
      <label>
        <input v-model="newNumberCard" type="text" @keydown="onKeyDown" />
      </label>
    </div>
    <div class="card-date-secure-code">
      <div class="data-block">
        <div class="data-card-label">EXPIRY DATE</div>
        <input
          v-model="expDate"
          class="input"
          type="text"
          maxlength="7"
          @keydown="onKeyDown"
        />
      </div>
      <div class="data-block">
        <div class="data-card-label">SECURE CODE</div>
        <input class="input" type="password" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreditCard",
  props: {
    cardNumber: {
      type: String,
    },
    cardNumberModifiers: {
      default: () => ({}),
    },
    cardDate: {
      type: String,
    },
    cardDateModifiers: {
      default: () => ({}),
    },
    cardCode: {
      type: Number,
    },
  },
  data() {
    return {
      expDate: "",
    };
  },
  computed: {
    newNumberCard: {
      get() {
        return (this.cardNumber ?? "").replace(/(\d{4}(?=\S+))/g, "$1 ");
      },
      set(cardNumberValue) {
        this.$emit("update:cardNumber", cardNumberValue);
      },
    },
  },
  watch: {
    expDate(newValue, oldValue) {
      if (newValue.length === 2 && oldValue.length === 1) {
        this.expDate = newValue + " / ";
      } else if (newValue.length === 4 && oldValue.length === 5) {
        this.expDate = newValue[0];
      }
      this.$emit("update:cardDate", this.expDate);
    },
  },
  methods: {
    onKeyDown(event) {
      const key = event.key;
      const isDigit = /\d/g.test(key);
      const isBackspace = key === "Backspace";
      if (!isDigit && !isBackspace) event.preventDefault();
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  border-radius: 10px;
  border: 2px solid green;
  padding: 20px;

  .card-number {
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
    .card-label {
      font-weight: 600;
      font-size: 14px;
      color: rgba(0, 0, 255, 0.756);
    }
  }
  .card-date-secure-code {
    display: flex;
    gap: 10px;
    justify-content: space-between;

    .data-block {
      display: flex;
      flex-direction: column;
    }
    .data-card-label {
      align-self: flex-start;

      font-weight: 600;
      font-size: 14px;
      color: rgba(0, 0, 255, 0.756);
    }
    .input {
      width: 100px;
    }
  }
}
</style>
