<template>
    <div class="filter-brand-panel">
        <header class="filter-brand-panel__header">
            <h3 class="filter-brand-panel__title">Brand</h3>
            <v-btn class="filter-brand-panel__button button"> All brand</v-btn>
        </header>
        <div class="filter-brand-panel__brands">
            <BrandLinkCard v-for="brand in brandsList" :key="brand.id" :brand-data="brand" />
        </div>
    </div>
</template>

<script setup>
import BrandLinkCard from '@/views/HomePages/new-products-section/brands/BrandLinkCard.vue'
import { brandsList } from '@/views/HomePages/new-products-section/brands/settings'
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.filter-brand-panel {
    background: #f5f7ff;
    width: 16.25%; /* 234/1440 */
    display: flex;
    flex-direction: column;

    &__header {
        display: grid;
        row-gap: toRem(16);
        padding: toRem(28) toRem(17);
    }

    // .filter-brand-panel__title

    &__title {
        text-align: center;
        font-size: toRem(16);
        font-weight: 700;
    }

    // .filter-brand-panel__button

    &__button {
    }

    // .filter-brand-panel__brands

    &__brands {
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-template-rows: repeat(3, auto);
    }
}
.button {
}
</style>
