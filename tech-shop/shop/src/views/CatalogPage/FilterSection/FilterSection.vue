<template>
    <section class="filter">
        <div class="filter__container">
            <h2 class="filter__title">MSI PS Series</h2>
            <FilterSortActionBar />
            <div class="filter__body">
                <FilterAsidePanel />
                <FilteredProductsCards />
            </div>
        </div>
    </section>
</template>

<script setup>
import FilterAsidePanel from './FilterAsidePanel.vue'
import FilteredProductsCards from './FilteredProductsCards.vue'
import FilterSortActionBar from './FilterSortActionBar.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.filter {
    // .filter__title

    &__title {
        font-size: toRem(32);
        font-weight: 600;
        &:not(:last-child) {
            margin-bottom: toRem(19);
        }
    }

    // .filter__body

    &__body {
        display: grid;
        column-gap: toRem(40);
        align-items: start;
        grid-template-columns: 17.524823% auto;
    }
}
</style>
