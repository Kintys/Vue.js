<template>
  <div class="seller-box" :class="{ ['selected-color']: notSelectSeller }">
    <h4>Продавець</h4>
    <label v-for="seller in sellerListData" :key="seller">
      <input type="checkbox" :value="seller" v-model="selectSeller" />
      {{ seller }}
    </label>
  </div>
  <label class="search-block">
    <input type="text" placeholder="Пошук" v-model="searchValue" />
  </label>
  <div class="brand-block" :class="{ ['selected-color']: notSelectBrand }">
    <h4>Бренд</h4>
    <label class="label" v-for="brand in filterBrandList" :key="brand">
      <input :value="brand" type="checkbox" v-model="selectBrand" />
      {{ brand }}
    </label>
  </div>
</template>

<script>
console.log();
export default {
  name: "ProductsFilters",
  props: {
    seller: { type: Array, default: () => [] },
    sellerModifiers: {
      default: () => ({}),
    },
    brand: { type: Array, default: () => [] },
    brandModifiers: {
      default: () => ({}),
    },
    sellerListData: { type: Array, default: () => [] },
    brandListData: { type: Array, default: () => [] },
  },
  data() {
    return {
      searchValue: null,
    };
  },
  computed: {
    selectSeller: {
      get() {
        return this.seller;
      },
      set(val) {
        this.$emit("update:seller", val);
      },
    },
    selectBrand: {
      get() {
        return this.brand;
      },
      set(val) {
        this.$emit("update:brand", val);
      },
    },
    notSelectSeller() {
      if (this.sellerModifiers.check) {
        if (this.selectSeller.length === 0 || !this.selectSeller) return true;
      }
      return false;
    },
    notSelectBrand() {
      if (this.brandModifiers.check) {
        if (this.selectBrand.length === 0 || !this.selectBrand) return true;
      }
      return false;
    },
    filterBrandList() {
      if (this.searchValue) {
        return this.brandListData.filter((item) =>
          item.toLowerCase().includes(this.searchValue.toLowerCase())
        );
      }
      return this.brandListData;
    },
  },
  methods: {
    checkValue(val) {
      if (val.length <= 0) return true;
      else return false;
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
