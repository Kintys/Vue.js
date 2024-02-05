<template>
    <section class="info">
        <div class="info__container">
            <div class="info__content">
                <div v-for="item in footerInfoList" class="info__block">
                    <div class="info__icon">
                        <img :src="getImageUrl(item.img)" alt="#" />
                    </div>
                    <h5 class="info__title">{{ $t(item.title) }}</h5>
                    <p class="info__text">{{ $t(item.description) }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { footerInfoList } from './settings'

const getImageUrl = (img) => {
    return new URL(`../../assets/${img}`, import.meta.url).href
}
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.info {
    @include adaptiveValue('padding-top', 100, 50);
    @include adaptiveValue('padding-bottom', 45, 25);
    // .info__container

    &__container {
        display: flex;
        justify-content: center;
    }

    // .info__section

    &__content {
        display: flex;
        justify-content: space-between;
        max-width: toRem(1055);
    }

    // .info__icon
    &__block {
        width: 18.402778%;
        height: 60.805861%; /* 166/273 */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    &__icon {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        &:not(:last-child) {
            margin-bottom: toRem(34);
        }
        &::before {
            position: absolute;
            content: '';
            background-color: #0156ff;
            border-radius: 50%;
            width: toRem(65);
            height: toRem(65);
            z-index: -1;
        }
    }

    // .info__title

    &__title {
        font-size: toRem(18);
        font-weight: 700;
        line-height: 132.5%; /* 23.85px */
        margin-bottom: toRem(13);
    }

    // .info__text

    &__text {
        text-align: center;
        line-height: 140%; /* 19.6px */
    }
}
</style>
