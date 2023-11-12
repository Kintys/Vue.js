<template>
  <div class="block">
    <div class="filter-block">
      <products-filters
        :seller-list-data="isFilterListSeller"
        :brand-list-data="isFilterListBrand"
        v-model:seller.check="sellerValue"
        v-model:brand.check="brandValue"
      />
    </div>
    <div class="grid-box">
      <product-list
        v-for="product in isFilteredDataProductList"
        :key="product.id"
        :laptop-card-item="product"
      />
    </div>
  </div>
</template>

<script>
import ProductsFilters from "./ProductsFilters.vue";
import ProductList from "./ProductList.vue";
export default {
  name: "FiveTaskProduct",
  components: { ProductList, ProductsFilters },
  props: {
    productDataList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      sellerValue: [],
      brandValue: [],
    };
  },
  computed: {
    isFilterListSeller() {
      return [
        ...new Set(this.productDataList.map((category) => category.seller)),
      ];
    },
    isFilterListBrand() {
      return [
        ...new Set(this.productDataList.map((category) => category.brand)),
      ];
    },
    isFilteredDataProductList() {
      console.log(this.brandValue);
      if (this.brandValue.length > 0 || this.sellerValue.length > 0) {
        return this.productDataList.filter((laptop) =>
          this.isProductFilterPartly(laptop)
        );
      }
      return this.productDataList;
    },
  },
  methods: {
    isProductFilter(laptop, propTitle, filterValue) {
      return laptop[propTitle].includes(filterValue);
    },
    isProductFilterPartly(laptop) {
      return (
        this.isProductFilter(laptop, "brand", this.brandValue) &&
        this.isProductFilter(laptop, "seller", this.sellerValue)
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.block {
  display: grid;
  grid-template-columns: 300px auto;
  padding: 20px;
  justify-content: space-between;
  border: 2px solid black;
}
.filter-block {
  margin-right: 100px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  border: 1px solid black;
  align-items: flex-start;
  padding: 10px;
}
.grid-box {
  display: grid;
  grid-template-columns: 300px 300px 300px 300px;
  gap: 10px;
}
</style>
