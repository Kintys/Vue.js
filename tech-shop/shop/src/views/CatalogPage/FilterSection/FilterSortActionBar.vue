<template>
    <div class="sort-bar">
        <div class="sort-bar__action-block">
            <div class="sort-bar__back">
                <router-link :to="{ name: 'home' }"
                    ><font-awesome-icon icon="chevron-left" /> {{ $t('filterSortActionBar.link') }}</router-link
                >
            </div>
        </div>
        <div class="sort-bar__select-block">
            <div style="width: 200px">
                <MSelect
                    :label="$t('filterSortActionBar.selectPref.placeholder')"
                    :prefix="$t('filterSortActionBar.selectPref.sortBy')"
                    :options-list="sortList"
                    v-model="valueSort"
                />
            </div>
            <div style="width: 200px">
                <MSelect
                    :label="$t('filterSortActionBar.selectPref.placeholder')"
                    :prefix="$t('filterSortActionBar.selectPref.show')"
                    :options-list="pageNumbersList"
                    v-model="pageSortByNumber"
                />
            </div>
        </div>
        <div class="sort-bar__show-card">
            <button
                @click="isSelectedStyle = true"
                class="sort-bar__grid"
                :class="{
                    ['active-style ']: isSelectedStyle
                }"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <rect x="6.90039" y="6.90002" width="3.57143" height="3.57143" fill="black" stroke="black" />
                    <rect x="6.90039" y="14.2143" width="3.57143" height="3.57143" fill="black" stroke="black" />
                    <rect x="6.90039" y="21.5286" width="3.57143" height="3.57143" fill="black" stroke="black" />
                    <rect x="14.2139" y="14.2143" width="3.57143" height="3.57143" fill="black" stroke="black" />
                    <rect x="14.2139" y="21.5286" width="3.57143" height="3.57143" fill="black" stroke="black" />
                    <rect x="14.2139" y="6.90002" width="3.57143" height="3.57143" fill="black" stroke="black" />
                    <rect x="21.5283" y="14.2143" width="3.57143" height="3.57143" fill="black" stroke="black" />
                    <rect x="21.5283" y="21.5286" width="3.57143" height="3.57143" fill="black" stroke="black" />
                    <rect x="21.5283" y="6.90002" width="3.57143" height="3.57143" fill="black" stroke="black" />
                </svg>
            </button>
            <button
                @click="isSelectedStyle = false"
                class="sort-bar__lines"
                :class="{
                    ['active-style ']: !isSelectedStyle
                }"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <rect x="4.57129" y="21.0286" width="9.14286" height="2.74286" fill="#A2A6B0" />
                    <rect x="4.57129" y="8.22858" width="21.9429" height="2.74286" fill="#A2A6B0" />
                    <rect x="4.57129" y="14.6286" width="16.4571" height="2.74286" fill="#A2A6B0" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import MSelect from '@/components/MSelect.vue'
import { useCatalogStore } from '@/stores/catalog'
const { addSortListObject } = useCatalogStore()

const isSelectedStyle = ref(true)
const valueSort = ref(null)
const pageSortByNumber = ref(null)
const sortList = ref([
    {
        name: 'filterSortActionBar.sortList.position',
        value: 'position'
    },
    {
        name: 'filterSortActionBar.sortList.review',
        value: 'review'
    }
])

const pageNumbersList = ref([
    {
        name: 'filterSortActionBar.pageNumbersList.10perPage',
        value: 10
    },
    {
        name: 'filterSortActionBar.pageNumbersList.15perPage',
        value: 15
    },
    {
        name: 'filterSortActionBar.pageNumbersList.20perPage',
        value: 20
    }
])
watch(valueSort, (newVal_1) => {
    addSortListObject({
        sortValue: newVal_1
    })
})
watch(pageSortByNumber, (newVal_2) => {
    addSortListObject({
        numberPage: newVal_2
    })
})
watch(isSelectedStyle, (newVal) => {
    addSortListObject({
        isSelectedStyle: newVal
    })
})
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.sort-bar {
    display: flex;
    // .sort-bar__back-link
    @media (max-width: $mobile) {
        flex-direction: column;
        row-gap: toRem(10);
    }
    width: 100%;
    align-items: center;
    &__action-block {
        flex-grow: 1;
        position: relative;
    }
    &__back {
        font-weight: 600;
        display: flex;
        justify-content: center;
        width: toRem(235);
    }

    // .sort-bar__select

    &__select-block {
        display: flex;
        column-gap: toRem(10);
        &:not(:last-child) {
            margin-bottom: toRem(10);
        }
        @media (max-width: em(425)) {
            flex-direction: column;
            row-gap: toRem(5);
        }
    }

    // .sort-bar__show-card

    &__show-card {
        @media (max-width: $mobile) {
            display: none;
        }
    }

    // .sort-bar__grid

    &__grid {
        svg {
            rect {
                fill: #a2a6b0;
                stroke: #a2a6b0;
                transition: all 0.3s;
            }
        }
    }

    // .sort-bar__lines

    &__lines {
        svg {
            rect {
                fill: #a2a6b0;
                stroke: #a2a6b0;
                transition: all 0.3s;
            }
        }
    }
}
.active-style {
    svg {
        rect {
            fill: #000;
            stroke: #000;
        }
    }
}
</style>
