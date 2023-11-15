<template>
  <div class="container">
    <ol class="list">
      <li
        v-for="category in showCategoryAndProductList"
        :key="category.id"
        @click="onSelectCategory(category.id)"
        class="list__item"
        :class="{ 'is-select': getSelectedCategory(category.id) }"
      >
        <div class="list__img">
          <img :src="category.categoryImage" />
        </div>
        <h2 class="list__title">{{ category.categoryTitle }}</h2>
      </li>
    </ol>
  </div>
  <product-list />
</template>

<script>
import ProductList from "@/components/ShopManager/ProductList.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ShopManager",
  components: {
    ProductList,
  },
  data() {
    return {
      categoryList: [],
    };
  },
  computed: {
    ...mapGetters(["showCategoryAndProductList", "getSelectedCategory"]),
  },
  methods: {
    ...mapActions(["loadData", "onSelectCategory"]),
  },
  created() {
    this.loadData();
  },
};
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 400px;
  // .list__item

  &__item {
    padding: 39px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: rgba(172, 255, 47, 0.196);
    height: 250px;
    border-radius: 20px;
  }

  // .list__img

  &__img {
    width: 100px;
  }
  &__img img {
    max-width: 100%;
  }
  &__title {
    font-size: 14px;
  }
}
.is-select {
  outline: 2px solid red;
}
li {
  list-style: none;
}
</style>
