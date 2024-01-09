<template>
    <div class="brands-cards">
        <BrandLinkCard v-for="brand in brandsList" :key="brand" :brand-data="brand" :use-link="true" />
    </div>
</template>

<script setup>
import BrandLinkCard from './BrandLinkCard.vue'
import { brandsList } from './settings'
</script>

<style lang="scss" scoped>
.brands-cards {
    display: flex;
}
</style>
