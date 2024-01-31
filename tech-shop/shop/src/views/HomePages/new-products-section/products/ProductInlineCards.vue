<template>
    <div class="inline-cards">
        <ProductCategoryLinkCard :show-card-data="categoryCard" />
        <ProductCardItem v-for="product in productList" :key="product.id" :card-item-data="product" />
    </div>
</template>

<script setup>
import ProductCategoryLinkCard from './ProductCategoryLinkCard.vue'
import ProductCardItem from './ProductCardItem.vue'
defineProps({
    productList: {
        type: Array,
        require: true
    },
    categoryCard: {
        type: Object,
        require: true
    }
})
</script>

<style lang="scss" scoped>
.inline-cards {
    display: grid;
    grid-template-columns: repeat(6, auto);
    grid-template-rows: auto;
}
</style>
