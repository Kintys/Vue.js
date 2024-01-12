<template>
    <div class="chips-bar">
        <div class="chips-bar__block">
            <div class="chips-bar__action btn-chips" v-for="(chips, i) in catalog.filterValue" :key="`${chips - i}`">
                {{ chips }}
                <button @click="onClearChips(chips)">
                    <font-awesome-icon icon="circle-xmark" color="red" size="xl" />
                </button>
            </div>
            <button @click="catalog.clearFilterValue" class="chips-bar__clear-all btn-chips" type="button">
                Clear All
            </button>
        </div>
    </div>
</template>

<script setup>
import { useCatalogStore } from '@/stores/catalog.js'
const catalog = useCatalogStore()

function onClearChips(name) {
    catalog.deleteFilterValue(name)
}
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.chips-bar {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    height: toRem(40);
    // .chips-bar__block

    &__block {
        display: flex;
    }

    // .chips-bar__action

    &__action {
    }

    // .chips-bar__clear-all

    &__clear-all {
    }
}
.btn-chips {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: toRem(5);
    padding: toRem(10) toRem(17);
    font-size: toRem(13);
    font-weight: 600;
    line-height: 210%; /* 27.3px */
}
</style>
