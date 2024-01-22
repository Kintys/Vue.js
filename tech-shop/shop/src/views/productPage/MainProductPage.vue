<template>
    <MainMasterPage>
        <DetailsProductPage />
    </MainMasterPage>
</template>

<script setup>
import MainMasterPage from '@/master-page/MainMasterPage.vue'
import DetailsProductPage from './detailsProductPage/DetailsProductPage'
import { useLaptopListStore } from '@/stores/laptop'
import { computed, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const { loadItemById } = useLaptopListStore()
const productId = computed(() => route.params.id)

onBeforeMount(() => {
    loadItemById(productId.value)
})
</script>

<style lang="scss" scoped></style>
