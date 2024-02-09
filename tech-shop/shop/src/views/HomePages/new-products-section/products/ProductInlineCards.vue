<template>
    <div class="inline-cards">
        <div class="inline-cards__link-card">
            <ProductCategoryLinkCard :show-card-data="categoryCard" class="inline-cards__link-card" />
        </div>
        <div class="inline-cards__card-product">
            <ProductCardItem v-for="product in productList" :key="product.id" :card-item-data="product" />
        </div>
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
@import '@/assets/adaptive.scss';
.inline-cards {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: auto;
    @media (max-width: $tablet) {
        grid-template-rows: toRem(200) auto;
        grid-template-columns: auto;
    }
    // .inline-cards__link-card

    &__link-card {
        flex-grow: 1;
    }

    // .inline-cards__card-product

    &__card-product {
        display: grid;
        grid-template-columns: repeat(5, auto);
        @media (max-width: em(1210)) {
            grid-template-columns: repeat(3, auto);
        }
        @media (max-width: $tablet) {
            grid-template-columns: auto;
        }
    }
}
</style>
