<template>
    <div class="sort-bar">
        <div class="sort-bar__item-info">items 1-35 of 61</div>
        <div class="sort-bar__select-block">
            <!-- <v-select
                v-model="sortData"
                :items="sortList"
                bg-color="#fff"
                prefix="Sort By:"
                class="select-sort"
            ></v-select> -->
            <div>
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
                </v-autocomplete>

                <!-- <v-select
                    :items="sortList"
                    bgColor="#ffffff"
                    baseColor="none"
                    prefix="Sort By:"
                    rounded="0"
                    density="default"
                    flat
                    variant="outlined"
                    class="my-select"
                    light
                >
                </v-select> -->
            </div>
        </div>
        <div class="sort-bar__show-card">
            <button class="sort-bar__grid">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" fill="white" />
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
            <button class="sort-bar__lines">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" fill="white" />
                    <rect x="4.57129" y="21.0286" width="9.14286" height="2.74286" fill="#A2A6B0" />
                    <rect x="4.57129" y="8.22858" width="21.9429" height="2.74286" fill="#A2A6B0" />
                    <rect x="4.57129" y="14.6286" width="16.4571" height="2.74286" fill="#A2A6B0" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const sortData = ref(null)
const pageSortNumber = ref(null)
const sortList = ref(['position', 'review', 'inStock', 'highPrice', 'lowPrice'])
const pageNumersList = ref([20, 35])
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.sort-bar {
    display: flex;
    // .sort-bar__back-link
    width: 100%;
    height: toRem(50);
    align-items: center;
    // .sort-bar__item-info

    &__item-info {
        flex-grow: 1;
    }

    // .sort-bar__select

    &__select-block {
        width: 500px;
        display: flex;
        gap: toRem(10);
    }

    // .sort-bar__show-card

    &__show-card {
    }

    // .sort-bar__grid

    &__grid {
    }

    // .sort-bar__lines

    &__lines {
    }
}
</style>
