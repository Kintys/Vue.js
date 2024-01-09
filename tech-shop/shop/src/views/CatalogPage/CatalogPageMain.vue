<template>
    <MainMasterPage><FilterPanel style="margin-top: 100px" /> <FilterBrandPanel /> </MainMasterPage>
</template>

<script setup>
import FilterPanel from './FilterSection/FilterPanel.vue'

import FilterBrandPanel from '@/views/CatalogPage/FilterSection/FilterBrandPanel.vue'

import MainMasterPage from '@/master-page/MainMasterPage.vue'
</script>

<style lang="scss" scoped></style>
