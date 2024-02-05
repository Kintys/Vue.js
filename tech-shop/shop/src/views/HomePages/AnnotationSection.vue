<template>
    <section class="annotation">
        <div class="annotation__container">
            <div class="annotation__block">
                <div class="annotation__icon">‘’</div>
                <swiper
                    :modules="modules"
                    :slides-per-view="1"
                    :space-between="10"
                    :pagination="{ clickable: true, el: '.annotation__pagination' }"
                >
                    <swiper-slide v-for="annotation in getItemsList" :key="annotation.userName">
                        <div class="annotation__content">
                            <div class="annotation__info">
                                <p class="annotation__text">
                                    {{ annotation.advice[currentLocale] }}
                                </p>
                                <span class="annotation__autor">- {{ annotation.userName }}</span>
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="annotation__actions">
                        <v-btn class="annotation__button button button--bg">Leave Us A Review</v-btn>
                        <div><div class="annotation__pagination"></div></div>
                    </div>
                </swiper>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import { useFeedbackStore } from '@/stores/feedback'
import { storeToRefs } from 'pinia'
import { useLocales } from '@/modulHelpers/i18n'

const modules = ref([Pagination])
const { getItemsList } = storeToRefs(useFeedbackStore())
const { currentLocale } = useLocales()
// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/pagination'
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.annotation {
    @include adaptiveValue('padding-top', 58, 20);
    // .annotation__container
    &__container {
        display: flex;
        justify-content: center;
    }

    // .annotation__block
    &__block {
        background-color: #f5f7ff;
        width: 80.555556%;
        height: 79.487179%;
        padding: toRem(49) toRem(119);
        position: relative;
    }

    &__icon {
        position: absolute;
        top: 5.806452%; /* 49/310 */
        left: 6%; /* 119/1160 */
        font-size: toRem(96);
    }
    // .annotation__content
    &__content {
        display: flex;
        // column-gap: toRem(26);
    }
    // .annotation__icon

    &__info {
        display: flex;
        flex-direction: column;
    }

    // .annotation__text
    &__text {
        font-size: toRem(18);
        &:not(:last-child) {
            margin-bottom: toRem(20);
        }
    }
    // .annotation__autor
    &__autor {
        text-align: right;
        font-size: toRem(14);
    }
    // .annotation__actions

    &__actions {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    // .annotation__button
}
</style>
