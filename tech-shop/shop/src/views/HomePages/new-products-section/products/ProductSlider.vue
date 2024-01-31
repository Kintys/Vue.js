<template>
    <swiper
        :modules="swiperModules"
        :slides-per-view="6"
        :loop="true"
        :navigation="{
            nextEl: '.next-arrow',
            prevEl: '.prev-arrow'
        }"
    >
        <swiper-slide class="swiper-box" v-for="product in getItemsList" :key="product.id">
            <ProductCardItem :card-item-data="product"
        /></swiper-slide>
        <button class="card__nav-indicator next-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 15 12" fill="none">
                <path d="M1 11L6 6L1 1" stroke="rgba(128, 128, 128, 0.511)" stroke-width="3" stroke-linecap="round" />
            </svg>
        </button>
        <button class="card__nav-indicator prev-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 15 12" fill="none">
                <path d="M1 11L6 6L1 1" stroke="rgba(128, 128, 128, 0.511)" stroke-width="3" stroke-linecap="round" />
            </svg>
        </button>
    </swiper>
</template>

<script setup>
import { ref } from 'vue'
import ProductCardItem from './ProductCardItem.vue'
import { Navigation } from 'swiper/modules'

import { usePcListStore } from '@/stores/pcList'

import { storeToRefs } from 'pinia'
const { getItemsList } = storeToRefs(usePcListStore())
const swiperModules = ref([Navigation])

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.swiper-box {
    padding: toRem(1);
}

.swiper-box {
    position: relative;
}
.card {
    // .card__nav-indicator

    &__nav-indicator {
        position: absolute;
        top: 45%;
        width: toRem(50);
        z-index: 2;
        height: toRem(50);
        @media (any-hover: hover) {
            &:hover {
                background-color: rgba(128, 128, 128, 0.511);
                border-radius: 50% 0 0 50%;
            }
        }
    }
}
.next-arrow {
    left: toRem(-15);
    transform: rotate(180deg);
}
.prev-arrow {
    right: toRem(-15);
}
</style>
