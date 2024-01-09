<template>
    <div class="filter-panel">
        <h2 class="filter-panel__title">Filters</h2>
        <v-btn class="filter-panel__button button">Clear Filter</v-btn>
        <div class="filter-panel__spollers">
            <MExpansionPanels label="category"></MExpansionPanels>
            <MExpansionPanels label="price"></MExpansionPanels>
            <MExpansionPanels label="color"></MExpansionPanels>
        </div>
        <div class="filter-panel__spoller-filter">
            <MExpansionPanels label="filter-name"></MExpansionPanels>
            <v-btn class="filter-panel__button button">Apply Filters (2)</v-btn>
        </div>
    </div>
</template>

<script setup>
import MExpansionPanels from '@/components/MExpansionPanels.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.filter-panel {
    background: #f5f7ff;
    // .filter-panel__title
    width: 16.25%; /* 234/1440 */
    display: flex;
    flex-direction: column;
    padding: toRem(28) toRem(16);
    &__title {
        font-size: toRem(16);
        font-weight: 700;
        text-align: center;
        &:not(:last-child) {
            margin-bottom: toRem(16);
        }
    }

    // .filter-panel__button

    &__button {
        &:not(:last-child) {
            margin-bottom: toRem(35);
        }
    }

    // .filter-panel__spollers

    &__spollers {
        row-gap: toRem(35);
        display: flex;
        flex-direction: column;
        &:not(:last-child) {
            margin-bottom: toRem(35);
        }
    }
    &__spoller-filter {
        display: flex;
        flex-direction: column;
        row-gap: toRem(16);
    }
}
.button {
}
</style>
