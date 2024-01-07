<template>
    <section class="home-new-product">
        <div class="home-new-product__container">
            <div class="home-new-product__headline">
                <h2 class="home-new-product__title">{{ $t('newProductSection.title') }}</h2>
                <a href="#" class="home-new-product__show-more">{{ $t('newProductSection.info-link') }}</a>
            </div>
            <div class="home-new-product__slider">
                <ProductSlider />
            </div>
            <div class="home-new-product__offer">
                <a class="home-new-product__offer-logo" href="#">
                    <img src="../../assets/img/homePage/offerBlock/offerLogo.svg" alt="#" />
                </a>
                <p class="home-new-product__offer-text" v-html="$t('newProductSection.offerBlock.text')"></p>
                <a class="home-new-product__offer-link" href="#"> {{ $t('newProductSection.offerBlock.titleLink') }}</a>
            </div>
            <div class="home-new-product__category">
                <ProductManager />
            </div>
            <BrandsLinksInlineCards />
        </div>
    </section>
</template>

<script setup>
import ProductSlider from './products/ProductSlider.vue'
import ProductManager from './products/ProductManager.vue'
import BrandsLinksInlineCards from './brands/BrandsLinksInlineCards.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.home-new-product {
    // .home-new-product__container
    padding-top: toRem(37);
    // .home-new-product__headline
    &__headline {
        display: flex;
        justify-content: space-between;
        &:not(:last-child) {
            margin-bottom: toRem(14);
        }
    }
    &__title {
        font-size: toRem(22);
        font-weight: 600;
        padding-left: toRem(6);
    }
    &__show-more {
        color: #0156ff;
        @media (any-hover: hover) {
            &:hover {
                text-decoration: underline;
            }
        }
    }
    // .home-new-product__offer
    &__offer {
        &:not(:last-child) {
            margin-bottom: toRem(14);
        }
        background-color: #f5f7ff;
        display: flex;
        width: 100%;
        height: toRem(70);
        column-gap: toRem(2);
        justify-content: center;
        align-items: center;
    }
    // .home-new-product__offer-logo
    &__offer-logo {
        margin-right: toRem(14);
        width: toRem(77);
        height: toRem(27);
        padding-right: toRem(11);
        img {
            width: 100%;
        }
        border-right: toRem(2) solid #00aeb8;
    }
    // .home-new-product__offer-text
    &__offer-text {
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
    // .home-new-product__offer-link
    &__offer-link {
        color: #0156ff;
        font-size: toRem(14);
        @media (any-hover: hover) {
            &:hover {
                text-decoration: underline;
            }
        }
    }

    // .home-new-product__category
    &__category {
        &:not(:last-child) {
            margin-bottom: toRem(31);
        }
    }
}
</style>
