<template>
    <div class="image-product">
        <swiper
            :modules="modules"
            :space-between="30"
            :pagination="{ clickable: true, el: '.image-product__pagination' }"
        >
            <swiper-slide v-for="annotation in 3" :key="annotation">
                <v-img src="@/assets/img/detailsPage/01.png" max-height="444" :aspect-ratio="1"></v-img>
            </swiper-slide>
            <div class="image-product__offer">
                <div class="image-product__box-offer">
                    <ProductOfferLine>
                        <template #offer>
                            <div class="offer-text">
                                <p class="offer-text__info" v-html="$t('newProductSection.offerBlock.text')"></p>
                                <a class="offer-text__link" href="#">
                                    {{ $t('newProductSection.offerBlock.titleLink') }}</a
                                >
                            </div>
                        </template>
                    </ProductOfferLine>
                </div>
            </div>
            <div class="image-product__actions">
                <div><div class="image-product__pagination"></div></div>
            </div>
        </swiper>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import ProductOfferLine from '@/views/HomePages/new-products-section/products/ProductOfferLine.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
const modules = ref([Pagination])
// Import Swiper styles
import 'swiper/scss'
import 'swiper/scss/pagination'
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.image-product {
    // .image-product__offer
    max-width: toRem(485);

    &__offer {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    // .image-product__box-offer

    &__box-offer {
        width: toRem(400);
    }

    // .image-product__actions

    &__actions {
    }

    // .image-product__pagination

    &__pagination {
        display: flex;
        justify-content: flex-end;
        width: 100%;
    }
}

.offer-text {
    // .offer-text__info

    &__info {
    }

    // .offer-text__link

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
