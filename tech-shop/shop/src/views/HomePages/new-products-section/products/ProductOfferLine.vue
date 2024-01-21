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

    // .offer__logo

    &__logo {
        margin-right: toRem(14);
        width: toRem(77);
        height: toRem(27);
        padding-right: toRem(11);
        border-right: toRem(2) solid #00aeb8;
    }

    // .offer__text

    &__text {
        display: flex;
        align-items: center;
        column-gap: toRem(5);
        color: #272560;
        font-size: toRem(18);
        line-height: 120.5%;
        b {
            font-weight: 600;
        }
    }

    // .offer__link

    &__link {
        color: #0156ff;
        font-size: toRem(14);
        @media (any-hover: hover) {
            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>
