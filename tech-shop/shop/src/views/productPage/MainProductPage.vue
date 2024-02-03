<template>
    <MainMasterPage>
        <DetailsProductPage />
    </MainMasterPage>
</template>

<script setup>
import MainMasterPage from '@/master-page/MainMasterPage.vue'
import DetailsProductPage from './detailsProductPage/DetailsProductPage'
import { useCatalogStore } from '@/stores/catalog'
import { computed, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { loadCatalogItemById } = useCatalogStore()
const productId = computed(() => route.params.id)

onBeforeMount(() => {
    loadCatalogItemById(productId.value)
})
</script>

<style lang="scss" scoped></style>
