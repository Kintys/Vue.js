<template>
  <div class="seller-box">
    <h4>Продавець</h4>
    <label :class="{ ['selected-color']: notSelectSellerColor }">
      <input type="radio" value="not selected" v-model="currentSeller" />
      Виберіть продавця
    </label>
    <label v-for="seller in sellerListData" :key="seller.id">
      <input
        type="radio"
        name="seller"
        :value="seller.name"
        v-model="currentSeller"
      />
      {{ seller.name }}
    </label>
  </div>
  <label class="search-block">
    <input type="text" placeholder="Пошук" v-model="searchValue" />
  </label>
  <div class="brand-block">
    <h4>Бренд</h4>
    <label :class="{ ['selected-color']: notSelectBrandColor }">
      <input type="radio" value="not selected" v-model="currentBrand" />
      Виберіть марку
    </label>
    <label
      class="label"
      v-for="brandItem in filterBrandList"
      :key="brandItem.id"
    >
      <input :value="brandItem.brand" type="radio" v-model="currentBrand" />
      {{ brandItem.brand }}
    </label>
  </div>
</template>

<script>
export default {
  name: "ProductsFilters",
  props: {
    seller: { type: String },
    sellerModifiers: {
      default: () => ({}),
    },
    brand: { type: String },
    brandModifiers: {
      default: () => ({}),
    },
    sellerListData: { type: Array, default: () => [] },
    brandListData: { type: Array, default: () => [] },
  },
  data() {
    return {
      filterArr: [],
      searchValue: null,
      notSelectSellerColor: null,
      notSelectBrandColor: null,
    };
  },
  computed: {
    currentSeller: {
      get() {
        return this.seller;
      },
      set(val) {
        if (this.sellerModifiers.check) {
          this.notSelectSellerColor = this.checkValue(val);
        }
        // Проблема з радіо кнопками, не можу зрозуміти чому кнопки не реагують миттєво
        val = this.checkValue(val) ? null : val;
        this.$emit("update:seller", val);
      },
    },
    currentBrand: {
      get() {
        return this.brand;
      },
      set(val) {
        if (this.brandModifiers.check) {
          this.notSelectBrandColor = this.checkValue(val);
        }
        // Проблема з радіо кнопками, не можу зрозуміти чому кнопки не реагують миттєво
        val = this.checkValue(val) ? null : val;
        this.$emit("update:brand", val);
      },
    },
    filterBrandList() {
      if (this.searchValue) {
        return this.brandListData.filter((item) =>
          item.brand.toLowerCase().includes(this.searchValue.toLowerCase())
        );
      }
      return this.brandListData;
    },
  },
  methods: {
    checkValue(val) {
      return val === "not selected" ? true : false;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  .seller-box {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .search-block {
  }
  .brand-block {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .selected-color {
    background-color: green;
  }
}
</style>
