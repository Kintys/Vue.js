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
import { onBeforeMount, onMounted, ref, computed } from 'vue'

import ProductBigInlineCard from '@/views/HomePages/new-products-section/products/ProductBigInlineCard.vue'
import ProductCardItem from '@/views/HomePages/new-products-section/products/ProductCardItem.vue'

import { storeToRefs } from 'pinia'
import { useLaptopListStore } from '@/stores/laptop.js'

const { getPageNumbers, getStyleValue } = storeToRefs(useLaptopListStore())
const { loadShortItemList, getItemListWithPageNumber } = useLaptopListStore()

const page = ref(1)
const list = computed(() => getItemListWithPageNumber(page.value))

onBeforeMount(() => {
    loadShortItemList(25)
})

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
        grid-template-columns: repeat(5, 1fr);
    }
    &__inline-product {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 330px;
    }
}
</style>
