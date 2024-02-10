<template>
    <div class="cart-product">
        <div class="cart-product__table-titles table-titles">
            <span class="table-titles__item">{{ $t('card.itemList.item') }}</span>
            <span class="table-titles__price">{{ $t('card.itemList.price') }}</span>
            <span class="table-titles__qty">{{ $t('card.itemList.qty') }}</span>
            <span class="table-titles__subtotal">{{ $t('card.itemList.subtotal') }}</span>
        </div>
        <div class="cart-product__product-box product-box" v-for="item in getCartList">
            <div class="product-box__image"><v-img width="120" height="120" :src="item.img"></v-img></div>
            <p class="product-box__description">{{ item.description[currentLocale] }}</p>
            <div class="product-box__price">${{ dividedString(item.currentPrice) }}</div>
            <div class="product-box__input">{{ item.qtyToBuy }}</div>
            <div class="product-box__subtotal">${{ dividedString(item.subTotal) }}</div>
            <button class="product-box__delete" @click="deleteFromCartList(item.id)">
                <font-awesome-icon icon="circle-xmark" style="color: #a2a6b0" />
            </button>
        </div>
        <div class="cart-product__actions">
            <v-btn class="cart-product__btn" @click="clearCartList">{{ $t('card.itemList.clearButton') }}</v-btn>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
import { useLocales } from '@/modulHelpers/i18n'
const { currentLocale } = useLocales()
const { deleteFromCartList, clearCartList } = useCartStore()
const { getCartList } = storeToRefs(useCartStore())

import { useSeparateDotFunc } from '@/compositionFunctions/separateStringFunc'
const { dividedString } = useSeparateDotFunc()
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.cart-product {
    max-width: toRem(916);
    display: grid;
    grid-template-rows: repeat(2, 1f);

    // .cart-product__table-titles

    &__table-titles {
    }

    // .cart-product__product-box

    &__product-box {
    }
    &__actions {
        @media (max-width: em(520)) {
            justify-self: center;
        }
    }
    &__btn {
        border-radius: toRem(20);
        background-color: black;
        color: white;
        font-size: toRem(11);
        font-weight: 600;
        @media (any-hover: hover) {
            &:hover {
                background-color: white;
                color: black;
                border: toRem(1) solid black;
            }
        }
    }
}
.table-titles {
    padding-bottom: toRem(15);
    font-weight: 600;
    border-bottom: toRem(1) solid #cacdd8;
    display: grid;
    @media (max-width: em(520)) {
        display: none;
    }
    &:not(:last-child) {
        margin-bottom: toRem(10);
    }

    grid:
        'item item item price qty subtotal subtotal' 1fr
        / toRem(140) 1fr 1fr 1fr 1fr 1fr auto;
    // .table-titles__item
    justify-items: center;
    &__item {
        grid-area: item;
        justify-self: start;
    }

    // .table-titles__price

    &__price {
        grid-area: price;
    }

    // .table-titles__qty

    &__qty {
        grid-area: qty;
    }

    // .table-titles__subtotal

    &__subtotal {
        justify-self: center;
        grid-area: subtotal;
    }
}
.product-box {
    align-items: center;
    padding-bottom: toRem(15);
    border-bottom: toRem(1) solid #cacdd8;
    display: grid;
    justify-items: center;
    @media (max-width: em(520)) {
        display: flex;
        flex-direction: column;
        row-gap: toRem(10);
        text-align: center;
    }
    &:not(:last-child) {
        margin-bottom: toRem(10);
    }

    grid:
        'img description description current-price input total delete' 1fr
        / toRem(150) 1fr 1fr 1fr 1fr 1fr auto;
    // .product-box__description

    &__description {
        grid-area: description;
    }

    &__image {
        grid-area: img;
    }
    // .product-box__price

    &__price {
        grid-area: current-price;
        @media (max-width: em(520)) {
            &::before {
                content: 'Price:';
                font-weight: 600;
                margin-right: toRem(5);
            }
        }
    }

    // .product-box__input

    &__input {
        grid-area: input;
        @media (max-width: em(520)) {
            &::before {
                content: 'Qty:';
                font-weight: 600;
                margin-right: toRem(5);
            }
        }
    }

    // .product-box__subtotal

    &__subtotal {
        grid-area: total;
        @media (max-width: em(520)) {
            &::before {
                content: 'Subtotal:';
                font-weight: 600;
                margin-right: toRem(5);
            }
        }
        @media (min-width: em(520)) {
            margin-left: toRem(20);
        }
    }

    // .product-box__delete

    &__delete {
        grid-area: delete;
        justify-self: end;
        @media (max-width: em(500)) {
            align-self: flex-end;
        }
    }
}
</style>
