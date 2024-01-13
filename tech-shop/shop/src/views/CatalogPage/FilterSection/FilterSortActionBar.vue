<template>
    <div class="sort-bar">
        <div class="sort-bar__back">
            <router-link :to="{ name: 'home' }"><font-awesome-icon icon="chevron-left" /> Back</router-link>
        </div>
        <div class="sort-bar__item-info">items 1-35 of 61</div>
        <div class="sort-bar__select-block">
            <MSelect label="Select" prefix="Sort by:" :clear-btn="true" :options-list="sortList" v-model="valueSort" />
            <MSelect
                label="Select"
                prefix="Show:"
                :clear-btn="true"
                :options-list="pageNumbersList"
                v-model="pageSortByNumber"
            />
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
        {{ sortListObject }}
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import MSelect from '@/components/MSelect.vue'
import { useCatalogStore } from '@/stores/catalog.js'

const { addSortListObject, sortListObject } = useCatalogStore()

const isSelectedStyle = ref(true)
const valueSort = ref(null)
const pageSortByNumber = ref(null)
const sortList = ref(['Position', 'Review', 'High price', 'Low price'])

const pageNumbersList = ref([
    {
        name: '20 per page',
        value: 20
    },
    {
        name: '35 per page',
        value: 35
    }
])
watch(valueSort, (newVal_1) => {
    addSortListObject({
        selectedSort: newVal_1
    })
})
watch(pageSortByNumber, (newVal_2) => {
    addSortListObject({
        numberPage: newVal_2
    })
})
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.sort-bar {
    display: flex;
    // .sort-bar__back-link
    width: 100%;
    align-items: center;
    &__back {
        font-weight: 600;
        width: 17.524823%;
        display: flex;
        justify-content: center;
        margin-right: toRem(10);
    }

    &__item-info {
        flex-grow: 1;
        cursor: pointer;
    }

    // .sort-bar__select

    &__select-block {
        display: flex;
        column-gap: toRem(10);
    }

    // .sort-bar__show-card

    &__show-card {
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

<!--   <v-autocomplete
                flat
                variant="outlined"
                prefix="Sort By:"
                :items="sortList"
                rounded="2px"
                base-color="#CACDD8"
                autofocus="none"
                density="default"
                center-affix="true"
                color="black"
            >
            </v-autocomplete>
            <v-autocomplete
                flat
                variant="outlined"
                prefix="Sort By:"
                :items="sortList"
                rounded="2px"
                base-color="#CACDD8"
                autofocus="none"
                density="default"
                center-affix="true"
                color="black"
            >
            </v-autocomplete> -->
