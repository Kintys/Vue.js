<template>
    <section class="social-media">
        <div class="social-media__container">
            <h2 class="social-media__title">{{ $t('socialMediaSection.title') }}</h2>
            <div class="social-media__cards">
                <SocialMediaItemCard v-for="social in getItemsList" :key="social.img" :social-item-data="social" />
            </div>
        </div>
    </section>
</template>

<script setup>
import SocialMediaItemCard from './SocialMediaItemCard.vue'
import { useSocialListStore } from '@/stores/social'
import { storeToRefs } from 'pinia'

const { getItemsList } = storeToRefs(useSocialListStore())
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.social-media {
    @include adaptiveValue('padding-top', 43, 20);

    // .social-media__title

    &__title {
        @include adaptiveValue('font-size', 22, 18);
        font-weight: 600;
        &:not(:last-child) {
            margin-bottom: toRem(21);
        }
    }

    // .social-media__cards

    &__cards {
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(6, auto);
        @media (max-width: em(1210)) {
            grid-template-columns: repeat(4, auto);
        }
        @media (max-width: $mobile) {
            grid-template-columns: repeat(2, auto);
        }
        @media (max-width: $mobileSmall) {
            grid-template-columns: auto;
        }
        column-gap: toRem(8);
        @include adaptiveValue('row-gap', 20, 10);
        @include adaptiveValue('column-gap', 8, 5);
    }
}
</style>
