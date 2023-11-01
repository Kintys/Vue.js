<template>
  <div class="container">
    <div class="card-number">
      <div class="card-label">CARD NUMBER</div>
      <label>
        <input
          ref="cardNumberRef"
          :key="cardId"
          type="text"
          v-model="newNumberCard"
        />
      </label>
    </div>
    <div class="card-date-secure-code">
      <div class="data-block">
        <div class="data-card-label">EXPIRY DATE</div>
        <input ref="cardItem" class="input" type="text" v-model="currentData" />
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
      cardId: 0,
    };
  },
  computed: {
    newNumberCard: {
      get() {
        return (this.cardNumber ?? "").replace(/(\d{4}(?=\S+))/g, "$1 ");
      },
      set(cardNumberValue) {
        if (this.cardNumberModifiers.onlyDigits) {
          cardNumberValue = cardNumberValue.replace(/\D/g, "");
          this.$nextTick(() => {
            this.cardId++;
            this.$nextTick(() => {
              this.$refs.cardNumberRef.focus();
            });
          });
        }
        this.$emit("update:cardNumber", cardNumberValue);
      },
    },
    currentData: {
      get() {
        return (this.cardDate ?? "").slice(0, 7);
      },
      set(cardDate) {
        if (this.cardDateModifiers.separateSlash) {
          if (cardDate.length >= 2 && cardDate.length < 3)
            cardDate = cardDate.replace(/(\d{2})/g, "$1 / ");
          this.$refs.cardItem.focus();
        }
        this.$emit("update:cardDate", cardDate);
      },
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
