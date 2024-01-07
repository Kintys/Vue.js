<template>
    <div class="card">
        <LoadingPage v-if="isLoading" />
        <ErrorPage v-else-if="hasError" />
        <ProductCardItem v-if="!hasError" v-for="item in list" :key="item.id" :card-item-data="item" />
    </div>

    <div><v-pagination v-model="page" :length="getPageNumbers" rounded="circle"></v-pagination></div>
</template>

<script setup>
import ErrorPage from '@/components/ErrorPage.vue'
import { useGeneralStore } from '@/stores/general'
import LoadingPage from '@/components/LoadingPage.vue'
import { onBeforeMount, onMounted, ref, computed } from 'vue'
import ProductCardItem from '@/views/HomePages/new-products-section/products/ProductCardItem.vue'
import { uselaptopListStore } from '@/stores/laptop'
import { storeToRefs } from 'pinia'

const { isLoading, hasError } = storeToRefs(useGeneralStore())
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
.card {
    position: relative;
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-template-rows: repeat(4, auto);
}
</style>
