<template>
    <div class="offer">
        <a class="offer__logo" href="#">
            <v-img src="@/assets/img/homePage/offerBlock/offerLogo.svg" aspect-ratio="1"></v-img>
        </a>
        <slot name="offer">
            <p class="offer__text" v-html="$t('newProductSection.offerBlock.text')"></p>
            <a class="offer__link" href="#"> {{ $t('newProductSection.offerBlock.titleLink') }}</a>
        </slot>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.offer {
    display: flex;
    width: 100%;
    column-gap: toRem(2);
    align-items: center;
    padding: toRem(0) toRem(7);

    // .offer__logo

    &__logo {
        @include adaptiveValue('margin-right', 14, 5);
        // width: toRem(77);
        height: toRem(27);
        @include adaptiveValue('padding-right', 11, 5);
        border-right: toRem(2) solid #00aeb8;
        @include adaptiveValue('width', 77, 63);
        @include adaptiveValue('height', 27, 24);
    }

    // .offer__text

    &__text {
        display: flex;
        align-items: center;
        column-gap: toRem(5);
        color: #272560;
        @include adaptiveValue('font-size', 18, 14);
        line-height: 120.5%;
        b {
            font-weight: 600;
        }
        @media (max-width: $tablet) {
            display: block;
        }
    }

    // .offer__link

    &__link {
        text-wrap: nowrap;
        color: #0156ff;
        @include adaptiveValue('font-size', 14, 12);
        @media (any-hover: hover) {
            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>
