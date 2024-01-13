<template>
    <div class="card">
        <div class="card__chips-bar"><ChipsBar /></div>
        <!-- <div class="card__products">
            <ProductCardItem v-for="item in list" :key="item.id" :card-item-data="item" />
        </div>
        <div class="card__pagination">
            <v-pagination v-model="page" :length="getPageNumbers" rounded="circle"></v-pagination>
        </div> -->
        <div class="card__inline-product"><ProductBigInlineCard v-for="item in 4" /></div>
    </div>
</template>

<script setup>
import { onBeforeMount, onMounted, ref, computed } from 'vue'

import ChipsBar from '@/components/ChipsBar.vue'
import ProductCardItem from '@/views/HomePages/new-products-section/products/ProductCardItem.vue'
import ProductBigInlineCard from '@/views/HomePages/new-products-section/products/ProductBigInlineCard.vue'

import { storeToRefs } from 'pinia'
import { useLaptopListStore } from '@/stores/laptop'
import { useCatalogStore } from '@/stores/catalog.js'

const { filterValueObject } = useCatalogStore()
const { getPageNumbers } = storeToRefs(useLaptopListStore())
const { loadItemsList, getItemListWithPageNumber } = useLaptopListStore()

const page = ref(1)
const list = computed(() => getItemListWithPageNumber(page.value))

onBeforeMount(() => {
    // loadItemsList()
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
    row-gap: toRem(35);
    // .card__products

    &__products {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(4, 1fr);
        max-height: toRem(1382);
        position: relative;
    }
    // &__inline-product {
    //     display: grid;
    //     grid-template-columns: 1fr;
    //     grid-template-rows: 330px;
    // }
}
</style>
