<template>
    <article class="card-item">
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
        <a href="#" class="card-item__picture">
            <img class="card-item__img ibg" :src="cardItemData.img" alt="#" />
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
        <p class="card-item__description">{{ showShortDescription }}</p>
        <div class="card-item__prises">
            <div class="card-item__old-price">${{ cardItemData.price.oldPrice }}</div>
            <div class="card-item__price">${{ cardItemData.price.currentPrice }}</div>
        </div>
    </article>
</template>

<script setup>
import StarRating from 'vue-star-rating'
import { computed } from 'vue'
const props = defineProps({
    cardItemData: {
        type: Object,
        default: () => ({})
    }
})

const showShortDescription = computed(() => {
    if (props.cardItemData.description.length > 50) return props.cardItemData.description.slice(0, 89) + '...'
    else return props.cardItemData.description
})
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';

.card-item {
    // .card-item__status
    display: flex;
    flex-direction: column;
    padding-top: toRem(8);
    @include adaptiveValue('padding-left', 25, 15);
    @include adaptiveValue('padding-right', 25, 15);
    @include adaptiveValue('padding-bottom', 21, 15);
    row-gap: toRem(8);

    @media (any-hover: hover) {
        &:hover {
            outline: 1px solid #0156ff;
        }
    }
    &__status {
        display: flex;
        font-size: toRem(10);
        line-height: 210%; /* 21px */
    }

    // .card-item__status-info

    &__status-info {
        display: flex;
        gap: toRem(5);
        align-items: center;
    }

    // .card-item__status-info--in-stock

    &__status-info--in-stock {
        color: #78a962;
    }

    // .card-item__status-info--absence

    &__status-info--absence {
        color: #c94d3f;
    }

    // .card-item__picture

    &__picture {
        align-self: center;
        width: toRem(150);
        height: toRem(150);
    }

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

    // .card-item__description

    &__description {
        font-size: toRem(13);
        flex-grow: 1;
    }

    // .card-item__prises

    &__prises {
        display: flex;
        flex-direction: column;
        row-gap: toRem(3);
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
}
</style>
