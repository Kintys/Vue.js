<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__headline-block">
                <div class="footer__headline">
                    <h2 class="footer__title">{{ $t('footer.title') }}</h2>
                    <p class="footer__subtitle">{{ $t('footer.subTitle') }}</p>
                </div>
                <div class="footer__subscribe">
                    <span class="footer__email">
                        <v-text-field
                            class="footer__input"
                            :label="$t('footer.inputSubLabel')"
                            bg-color="black"
                            color="white"
                            hide-details="auto"
                            variant="solo"
                        ></v-text-field>
                    </span>
                    <v-btn class="footer__button button">{{ $t('footer.button') }}</v-btn>
                </div>
            </div>
            <div class="footer__links-list">
                <FooterLinksList v-for="item in linksList" :key="item.title" :link-data="item" />
            </div>
        </div>
    </footer>
</template>

<script setup>
import FooterLinksList from './FooterLinksList.vue'
import { linksList } from './settings'
</script>

<style lang="scss" scoped>
$text-field-affix-color: #020203;
@import '@/assets/adaptive.scss';
.footer {
    @include adaptiveValue('padding-top', 47, 27);
    color: #fff;
    background-color: #020203;
    // .footer__container

    &__container {
        @include adaptiveValue('padding-bottom', 20, 10);
    }

    // .footer__headline-block

    &__headline-block {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        @media (max-width: $tablet) {
            flex-direction: column;
            align-items: center;
            text-align: center;
            @include adaptiveValue('row-gap', 10, 7);
        }
        &:not(:last-child) {
            @include adaptiveValue('margin-bottom', 45, 15);
        }
    }
    // .footer__title

    &__title {
        @include adaptiveValue('font-size', 38, 20);
        font-weight: 500;
        line-height: 132.5%; /* 50.35px */
        &:not(:last-child) {
            margin-bottom: toRem(9);
        }
    }

    // .footer__subtitle

    &__subtitle {
        @include adaptiveValue('font-size', 16, 13);
        font-weight: 300;
        @include adaptiveValue('column-gap', 23, 10);
        line-height: 132.5%; /* 21.2px */
    }

    &__subscribe {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        @include adaptiveValue('column-gap', 20, 10);
        @media (min-width: $tablet) {
            max-width: toRem(565);
        }
        @media (max-width: $mobileSmall) {
            flex-direction: column;
            row-gap: toRem(10);
        }
    }

    &__email {
        width: 100%;
        margin-right: toRem(2);
        @media (min-width: $mobileSmall) {
            width: toRem(391);
        }
    }
    &__input {
        border: toRem(1) solid white;
        width: 100%;
    }
    // .footer__links-list

    &__links-list {
        display: grid;
        grid-template-columns: repeat(5, auto);
        row-gap: toRem(8);
        column-gap: toRem(8);
        @media (max-width: $tablet) {
            grid-template-columns: repeat(4, auto);
        }
        @media (max-width: $mobile) {
            grid-template-columns: repeat(3, auto);
        }
        @media (max-width: $mobileSmall) {
            grid-template-columns: auto;
            text-align: center;
        }
    }
}
</style>
