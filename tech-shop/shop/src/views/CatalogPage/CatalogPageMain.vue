<template>
    <MainMasterPage><FilterSection /></MainMasterPage>
</template>

<script setup>
import { onBeforeMount } from 'vue'
import FilterSection from './FilterSection/FilterSection.vue'
import MainMasterPage from '@/master-page/MainMasterPage.vue'
import { useCatalogStore } from '@/stores/catalog'
const { loadCatalogList } = useCatalogStore()
onBeforeMount(() => loadCatalogList())
</script>

<style lang="scss" scoped></style>
