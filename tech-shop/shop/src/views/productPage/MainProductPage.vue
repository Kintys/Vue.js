<template>
    <MainMasterPage>
        <!-- <DetailsProductPage /> -->
        {{ getCurrentItem }}
    </MainMasterPage>
</template>

<script setup>
import MainMasterPage from '@/master-page/MainMasterPage.vue'
import DetailsProductPage from './detailsProductPage/DetailsProductPage'
import { useCatalogStore } from '@/stores/catalog'
import { storeToRefs } from 'pinia'
import { computed, onBeforeMount } from 'vue'

import { useRoute } from 'vue-router'
const route = useRoute()
const { getCurrentItem } = storeToRefs(useCatalogStore())
const { loadItem } = useCatalogStore()
const productId = computed(() => route.params.id)

onBeforeMount(() => {
    loadItem(productId.value)
})
</script>

<style lang="scss" scoped></style>
