<template>
    <section class="details-product">
        <div class="details-product__container">
            {{ productObject }}
            <div class="details-product__actions-bar"><ActionsBarProductPage v-model="tab" /></div>
            <div class="details-product__body">
                <article class="details-product__product-description">
                    <TabsWindowProductPage :show-window="tab" />
                </article>
                <div class="details-product__product-picture"><ImageProductSlider /></div>
            </div>
        </div>
    </section>
</template>

<script setup>
import ImageProductSlider from './ImageProductSlider.vue'
import ActionsBarProductPage from './ActionsBarProductPage.vue'
import TabsWindowProductPage from './TabsWindowProductPage'
import { ref } from 'vue'

const tab = ref('one')
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.details-product {
    &__container {
    }

    // .details-product__actions-bar

    &__actions-bar {
    }

    // .details-product__body

    &__body {
        grid-template-columns: 55% 50%;
        @media (max-width: em(1075)) {
            grid-template-columns: auto;
        }
        @media (min-width: em(550)) {
            display: grid;
        }
    }

    // .details-product__product-description

    &__product-description {
        &:not(:last-child) {
            margin-bottom: toRem(10);
        }
        background: #f5f7ff;
        @include adaptiveValue('padding-top', 50, 20);
        @include adaptiveValue('padding-bottom', 30, 15);
        @include adaptiveValue('padding-right', 50, 30);
        @include adaptiveValue('padding-left', 50, 20);
    }

    // .details-product__product-picture

    &__product-picture {
        align-self: end;
        @media (max-width: em(1075)) {
            justify-self: center;
            text-align: center;
        }
    }
}
</style>
