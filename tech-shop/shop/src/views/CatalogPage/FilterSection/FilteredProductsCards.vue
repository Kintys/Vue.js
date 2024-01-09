<template>
    <div class="card">
        <div class="card__products">
            <ProductCardItem v-for="item in list" :key="item.id" :card-item-data="item" />
        </div>
        <div class="card__pagination">
            <v-pagination v-model="page" :length="getPageNumbers" rounded="circle"></v-pagination>
        </div>
    </div>
</template>

<script setup>
import { useGeneralStore } from '@/stores/general'
import { onBeforeMount, onMounted, ref, computed } from 'vue'
import ProductCardItem from '@/views/HomePages/new-products-section/products/ProductCardItem.vue'
import { uselaptopListStore } from '@/stores/laptop'
import { storeToRefs } from 'pinia'

const { getPageNumbers } = storeToRefs(uselaptopListStore())
const { loadItemsList, getItemListWithPageNumber } = uselaptopListStore()
const page = ref(1)
const list = computed(() => getItemListWithPageNumber(page.value))

onBeforeMount(() => {
    loadItemsList()
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
}
</style>
