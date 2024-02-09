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
@import '@/assets/adaptive.scss';
.brands-cards {
    display: flex;
    @media (max-width: $mobile) {
        display: grid;
        grid-template-columns: repeat(3, auto);
    }
}
</style>
