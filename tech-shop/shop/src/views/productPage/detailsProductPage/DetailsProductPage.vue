<template>
    <section class="details-product">
        <div class="details-product__container">
            {{ productObject }}
            <div class="details-product__actions-bar"><ActionsBarProductPage v-model="tab" /></div>
            <div class="details-product__body">
                <article class="details-product__product-description">
                    <TabsWindowProductPage :product-data-item="getCurrentItem" :show-window="tab" />
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
import { useLaptopListStore } from '@/stores/laptop'
import { ref } from 'vue'

import { storeToRefs } from 'pinia'

const { getCurrentItem } = storeToRefs(useLaptopListStore())

const tab = ref(null)
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
        display: grid;
        grid-template-columns: 55% 50%;
    }

    // .details-product__product-description

    &__product-description {
        background: #f5f7ff;
        @include adaptiveValue('padding-top', 50, 20);
        @include adaptiveValue('padding-bottom', 30, 15);
        @include adaptiveValue('padding-right', 50, 30);
        @include adaptiveValue('padding-left', 50, 20);
    }

    // .details-product__product-picture

    &__product-picture {
        align-self: end;
    }
}
</style>
