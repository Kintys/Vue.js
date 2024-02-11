<template>
    <div class="card">
        <div v-if="getStyleValue" class="card__products">
            <ProductCardItem v-for="item in list" :key="item.id" :card-item-data="item" />
        </div>
        <div v-else class="card__inline-product">
            <ProductBigInlineCard v-for="item in list" :key="item.id" :card-item-data="item" />
        </div>
        <div class="card__pagination">
            <v-pagination v-model="page" :length="getPageNumbers" rounded="circle"></v-pagination>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'

import ProductBigInlineCard from '@/views/HomePages/new-products-section/products/ProductBigInlineCard.vue'
import ProductCardItem from '@/views/HomePages/new-products-section/products/ProductCardItem.vue'

import { storeToRefs } from 'pinia'
import { useCatalogStore } from '@/stores/catalog'

const { getPageNumbers, getStyleValue } = storeToRefs(useCatalogStore())
const { getItemListWithPageNumber } = useCatalogStore()

const page = ref(1)
const list = computed(() => getItemListWithPageNumber(page.value))

onMounted(() => {
    list.value = getItemListWithPageNumber(page.value)
})
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';

.card {
    display: flex;
    flex-direction: column;
    // .card__products

    &__products {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        @media (max-width: em(1050)) {
            grid-template-columns: repeat(3, 1fr);
        }
        @media (max-width: $tablet) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media (max-width: $mobile) {
            grid-template-columns: auto;
        }
    }
    &__inline-product {
        &:not(:last-child) {
            margin-bottom: toRem(20);
        }
    }
}
</style>
