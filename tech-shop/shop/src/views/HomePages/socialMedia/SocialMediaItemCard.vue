<template>
    <a href="#" class="social-card">
        <div class="social-card__img">
            <img m :src="socialItemData.img" />
        </div>
        <div class="social-card__content">
            <p class="social-card__text">
                {{ socialItemData.description[currentLocale] }}
            </p>
            <div class="social-card__post-date">
                {{ socialItemData.data }}
            </div>
        </div>
    </a>
</template>

<script setup>
import { useLocales } from '@/modulHelpers/i18n'
defineProps({
    socialItemData: {
        type: Object
    }
})
const { currentLocale } = useLocales()
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.social-card {
    // .social-card__img
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: toRem(225);
    min-height: toRem(322);
    padding: toRem(1);
    @media (any-hover: hover) {
        &:hover {
            outline: toRem(1) solid #ccc;
        }
    }
    &__img {
        max-height: toRem(151);
        img {
            width: 100%;
        }
    }

    // .social-card__content

    &__content {
        display: flex;
        height: 100%;
        flex-direction: column;
        text-align: center;
        padding: toRem(10) toRem(20);
    }

    // .social-card__text

    &__text {
        flex-grow: 1;
        font-size: toRem(12);
    }

    // .social-card__post-date

    &__post-date {
        font-size: toRem(10);
        color: #a2a6b0;
    }
}
</style>
