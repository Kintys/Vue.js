<template>
    <aside class="filter-aside-block">
        <FilterPanel />
        <FilterContentComp />
        <FilterContentComp>
            <template #filter-card>
                <div class="filter-content-box">
                    <h3 class="filter-content-box__title">{{ $t('filterAsidePanel.compare.title') }}</h3>
                    <p class="filter-content-box__text">{{ $t('filterAsidePanel.compare.subTitle') }}</p>
                </div>
            </template>
        </FilterContentComp>
        <FilterContentComp>
            <template #filter-card>
                <div class="filter-content-box">
                    <h3 class="filter-content-box__title">{{ $t('filterAsidePanel.wishList.title') }}</h3>
                    <p class="filter-content-box__text">{{ $t('filterAsidePanel.wishList.subTitle') }}</p>
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
    margin-right: toRem(10);
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
