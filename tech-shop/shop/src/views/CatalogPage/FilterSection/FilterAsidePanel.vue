<template>
    <aside class="filter-aside-block">
        <FilterPanel />
        <FilterContentComp />
        <FilterContentComp>
            <template #filter-card>
                <div class="filter-content-box">
                    <h3 class="filter-content-box__title">Compare Products</h3>
                    <p class="filter-content-box__text">You have no items to compare</p>
                </div>
            </template>
        </FilterContentComp>
        <FilterContentComp>
            <template #filter-card>
                <div class="filter-content-box">
                    <h3 class="filter-content-box__title">My Wish List</h3>
                    <p class="filter-content-box__text">You have no items in your wish list.</p>
                </div>
            </template>
        </FilterContentComp>
        <FilterContentComp>
            <template #filter-card>
                <a href="#">
                    <v-img src="../../../assets/img/filter/filterImgBar.png" height="100%" aspect-ratio="1/1"
                /></a>
            </template>
        </FilterContentComp>
    </aside>
</template>

<script setup>
import FilterPanel from './FilterPanel.vue'
import FilterContentComp from './FilterContentComp.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.filter-aside-block {
    display: grid;
    row-gap: toRem(7);
}
.filter-content-box {
    text-align: center;
    padding: toRem(19) toRem(16);

    &__title {
        font-size: toRem(16);
        font-weight: 700;
        &:not(:last-child) {
            margin-bottom: toRem(16);
        }
    }

    // .filter-content-box__text

    &__text {
        font-size: toRem(13);
        font-weight: 400;
        line-height: 130%; /* 16.9px */
    }
}
</style>
