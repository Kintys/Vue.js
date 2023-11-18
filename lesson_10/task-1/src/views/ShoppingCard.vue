<template>
    <div class="shop-card">
        <div v-if="showCard">
            <div v-for="{ cardId, product } in getShoppindCard" :key="cardId" class="shop-card__box">
                <div class="shop-card__image">
                    <img :src="product.imgSrc" alt="" />
                </div>
                <div class="shop-card__info">
                    <p class="shop-card__title">{{ product.title }}</p>
                    <p class="shop-card__description">{{ product.description }}</p>
                    <div class="shop-card__price">{{ product.price }}</div>
                </div>
                <button type="submit"><i class="fa fa-trash" @click="onDelete(cardId)"></i></button>
            </div>
        </div>
        <h2 v-else>Ваш кошик пистий &#128532;</h2>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'ShoppingCard',
    computed: {
        ...mapGetters('card', ['getShoppindCard']),
        showCard() {
            console.log(this.getShoppindCard)
            return this.getShoppindCard.length <= 0 ? false : true
        },
    },
    methods: {
        ...mapActions('card', ['deleteProduct']),
        onDelete(id) {
            this.deleteProduct(id)
        },
    },
}
</script>

<style lang="scss" scoped>
.shop-card {
    margin-left: 10px;
    max-width: 800px;
    padding: 20px;
    border: 2px solid black;
    // .shop-card__box

    &__box {
        display: flex;
        padding: 10px;
        align-items: center;
        gap: 30px;
    }

    // .shop-card__image

    &__image {
        width: 300px;
        img {
            max-width: 100%;
        }
    }

    // .shop-card__info

    &__info {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    // .shop-card__title

    &__title {
        color: red;
        font-size: 20px;
    }

    // .shop-card__description

    &__description {
        font-size: 18px;
        font-style: italic;
    }

    // .shop-card__price

    &__price {
        color: orange;
        font-size: 20px;
    }
}
</style>
