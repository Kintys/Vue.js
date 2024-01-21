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
                <ProductOfferLine />
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
import ProductOfferLine from './products/ProductOfferLine.vue'
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
        display: grid;
        width: 100%;
        height: toRem(70);
        justify-content: center;
    }
    // .home-new-product__offer-logo
    // .home-new-product__category
    &__category {
        &:not(:last-child) {
            margin-bottom: toRem(31);
        }
    }
}
</style>
