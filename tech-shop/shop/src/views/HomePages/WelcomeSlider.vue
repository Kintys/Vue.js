<template>
    <section class="welcome">
        <div class="welcome__container">
            <swiper
                class="welcome-swiper"
                :space-between="5"
                :loop="true"
                :autoplay="{ delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: true }"
                :navigation="{
                    nextEl: '.next-arrow',
                    prevEl: '.prev-arrow'
                }"
                :modules="modules"
            >
                <swiper-slide class="welcome-swiper__slider" v-for="(sw, i) in swiperData" :key="i">
                    <div class="welcome-swiper__block">
                        <img class="welcome-swiper__image ibg" :src="getImageUrl(sw.img)" />
                    </div>
                </swiper-slide>
                <button class="welcome-swiper__nav-indicator next-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 15 12" fill="none">
                        <path d="M1 11L6 6L1 1" stroke="white" stroke-width="3" stroke-linecap="round" />
                    </svg>
                </button>
                <button class="welcome-swiper__nav-indicator prev-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 15 12" fill="none">
                        <path d="M1 11L6 6L1 1" stroke="white" stroke-width="3" stroke-linecap="round" />
                    </svg>
                </button>
            </swiper>
        </div>
    </section>
</template>
<script setup>
import { ref, reactive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
const getImageUrl = (name) => {
    return new URL(`../../assets/${name}`, import.meta.url).href
}
import { Navigation, Autoplay } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'

const swiperData = reactive([
    { img: 'img/homePage/image1.jpg' },
    { img: 'img/homePage/image1.jpg' },
    { img: 'img/homePage/image1.jpg' }
])

const modules = ref([Navigation, Autoplay])
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.welcome {
    // .weclome__container

    &__container {
        position: relative;
    }
}
.welcome-swiper {
    // .welcome-swiper__slider

    &__slider {
        width: toRem(1398);
        display: flex;
        justify-content: center;

        // height: toRem(328);
    }

    &__image {
        aspect-ratio: 1398/328;
    }
    &__nav-indicator {
        position: absolute;
        top: 45%;
        z-index: 2;
        @media (max-width: $tablet) {
            display: none;
        }
    }
}
.next-arrow {
    left: toRem(-10);
    transform: rotate(180deg);
}

.prev-arrow {
    right: toRem(-10);
}
</style>
