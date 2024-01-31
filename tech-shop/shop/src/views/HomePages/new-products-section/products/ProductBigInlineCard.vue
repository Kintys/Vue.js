<template>
    <div class="card-item">
        <div class="card-item__media">
            <a @click="goToDetailsProduct" class="card-item__img">
                <v-img :src="cardItemData.img" alt="#" :width="250" aspect-ratio="4/3"></v-img>
            </a>
            <div class="card-item__opinion">
                <span class="card-item__stars"
                    ><star-rating
                        :inline="true"
                        :star-size="13"
                        :read-only="true"
                        :show-rating="false"
                        :rating="cardItemData.review"
                /></span>
                <span class="card-item__reviews"
                    >{{ $t('productCard.itemCard.textRev') }}<span>({{ cardItemData.review }})</span>
                </span>
            </div>
        </div>
        <div class="card-item__content">
            <h4 class="card-item__title">{{ cardItemData.title }}</h4>
            <div class="card-item__info-wrapper">
                <div class="card-item__info-text">
                    <p class="card-item__description">
                        {{ showShortDescription }}
                    </p>
                    <div class="card-item__prises">
                        <div class="card-item__old-price">${{ cardItemData.oldPrice }}</div>
                        <div class="card-item__price">${{ cardItemData.currentPrice }}</div>
                    </div>
                </div>
                <div class="card-item__info-params">
                    <p class="card-item__params-value" v-for="item in 3" :key="item">
                        <span>CPU</span> <span>N/A</span>
                    </p>
                </div>
            </div>
            <v-btn @click="addProductToCardList" class="card-item__add-cart button">
                <font-awesome-icon icon="cart-shopping" /> Add to Cart</v-btn
            >
        </div>
        <div class="card-item__status">
            <span v-if="!cardItemData.count" class="card-item__status-info card-item__status-info--absence">
                <font-awesome-icon :icon="['fas', 'circle-xmark']" size="xl" />{{
                    $t('productCard.itemCard.status.absence')
                }}</span
            >
            <span v-else class="card-item__status-info card-item__status-info--in-stock"
                ><font-awesome-icon :icon="['fas', 'circle-check']" size="xl" />{{
                    $t('productCard.itemCard.status.inStock')
                }}</span
            >
        </div>
    </div>
</template>

<script setup>
import StarRating from 'vue-star-rating'
import { computed, onBeforeMount, ref } from 'vue'
import { useCartStore } from '@/stores/cart'
const props = defineProps({
    cardItemData: {
        type: Object,
        default: () => ({})
    }
})

const { addToCartList } = useCartStore()
const currentLocal = ref(null)
const showShortDescription = computed(() => {
    if (props.cardItemData.description[currentLocal.value].length > 50)
        return props.cardItemData.description[currentLocal.value].slice(0, 53) + '...'
    else return props.cardItemData.description[currentLocal.value]
})
onBeforeMount(() => {
    currentLocal.value = localStorage.getItem('lastLocale')
})
import { useRouter } from 'vue-router'
const router = useRouter()

function goToDetailsProduct() {
    router.push({
        name: 'product',
        params: {
            id: props.cardItemData.id
        }
    })
}
function addProductToCardList() {
    addToCartList({
        inputCount: 1,
        productId: props.cardItemData.id
    })
}
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';

.card-item {
    display: flex;
    // .card-item__media
    padding: toRem(14) toRem(36);
    @media (any-hover: hover) {
        &:hover {
            box-shadow: 0 toRem(5) toRem(15) 0 rgba(0, 0, 0, 0.14);
            transform: scale(1.01);
            transition: all 0.5s;
        }
    }

    &__media {
        padding: 0 toRem(23);
    }

    // .card-item__img

    &__img {
        cursor: pointer;
        &:not(:last-child) {
            margin-bottom: toRem(10);
        }
    }

    // .card-item__opinion

    &__opinion {
        display: flex;
        align-items: center;
        column-gap: toRem(10);
    }

    // .card-item__reviews

    &__reviews {
        font-size: toRem(12);
        color: #a2a6b0;
        font-weight: 400;
        line-height: 210%;
    }

    // .card-item__content

    &__content {
        flex-grow: 1;
        justify-content: center;
        display: flex;
        flex-direction: column;
        font-size: toRem(13);
    }

    // .card-item__title

    &__title {
        font-weight: 600;
        &:not(:last-child) {
            margin-bottom: toRem(21.5);
        }
    }
    &__status {
        text-wrap: nowrap;
    }
    // .card-item__info-wrapper

    &__info-wrapper {
        display: flex;
        @include adaptiveValue('column-gap', 46, 20);
        &:not(:last-child) {
            margin-bottom: toRem(47.5);
        }
    }

    // .card-item__description

    &__description {
        max-width: toRem(345);
        &:not(:last-child) {
            margin-bottom: toRem(16);
        }
    }

    // .card-item__prises

    &__prises {
        display: flex;
        column-gap: toRem(7);
        align-items: center;
    }

    // .card-item__old-price

    &__old-price {
        color: #666;
        font-size: toRem(14);
        line-height: 140%;
        text-decoration-line: line-through;
    }

    // .card-item__price

    &__price {
        font-size: toRem(18);
        font-weight: 600;
        line-height: 140%;
    }

    // .card-item__info-params

    &__info-params {
        width: toRem(155);
    }

    // .card-item__params-value

    &__params-value {
        cursor: pointer;
        padding: toRem(3) toRem(10);
        display: flex;
        justify-content: space-between;
        @media (any-hover: hover) {
            &:hover {
                background: #f5f7ff;
                transition: all 0.3s;
            }
        }
    }

    // .card-item__add-cart

    &__add-cart {
        align-self: flex-start;
    }

    &__status-info {
        display: flex;
        gap: toRem(5);
        align-items: center;
    }

    // .card-item__status-info--in-stock

    &__status-info--in-stock {
        color: #78a962;
    }
}
</style>
