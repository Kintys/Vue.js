<template>
    <div class="sort-bar">
        <div class="sort-bar__item-info">items 1-35 of 61</div>
        <div class="sort-bar__select-block">
            <MSelect label="select" prefix="Sort by:" :clear-btn="true" :options-list="sortList" v-model="sortData" />
            <MSelect
                label="select"
                prefix="Sort by:"
                :clear-btn="true"
                :options-list="pageNumbersList"
                v-model="pageSortNumber"
            />
        </div>
        <div class="sort-bar__show-card">
            <button class="sort-bar__grid">
                <v-icon>mdi-dots-grid</v-icon>
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
import MSelect from '@/components/MSelect.vue'
const sortData = ref(null)
const pageSortNumber = ref(null)
const sortList = ref(['position', 'review', 'inStock', 'highPrice', 'lowPrice'])
const pageNumbersList = ref([20, 35])
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
        width: toRem(365);
        display: flex;
        column-gap: toRem(10);
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
