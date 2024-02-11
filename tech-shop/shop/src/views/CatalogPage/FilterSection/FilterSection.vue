<template>
    <section class="filter">
        <div class="filter__container">
            <h2 class="filter__title">{{ $t('filterSection.title') }}</h2>
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
        @include adaptiveValue('font-size', 32, 25);
        font-size: toRem(32);
        font-weight: 600;
        &:not(:last-child) {
            @include adaptiveValue('margin-bottom', 19, 10);
        }
    }

    // .filter__body

    &__body {
        // column-gap: toRem(40);
        align-items: start;
        grid-template-columns: auto auto;
        // grid-template-columns: 17.524823% auto;
        @media (max-width: $mobile) {
            grid-template-columns: auto;
        }
        @media (min-width: $mobileSmall) {
            display: grid;
        }
    }
}
</style>
