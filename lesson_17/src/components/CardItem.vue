<template>
    <div class="container-card">
        <a :href="cardData.link" class="card-picture">
            <img class="card-img" :src="cardData.imgSrc" alt="#" />
        </a>
        <div class="card-text">
            <h4 class="card-title">{{ cardData.title }}</h4>
            <p class="card-description">{{ cardData.description[currentLocale] }}</p>
        </div>
        <div class="card-count">
            <v-btn :disabled="cardData.count === 1" @click="subtractCountProduct(cardData.id)" variant="tonal"
                ><font-awesome-icon icon="minus"
            /></v-btn>
            {{ cardData.count }}
            <v-btn @click="addCountProduct(cardData.id)" variant="tonal"><font-awesome-icon icon="plus" /></v-btn>

            <p class="card-price">{{ cardData.price[currentLocale] }} {{ currentCurrency }}</p>
            <v-btn @click="deleteProduct(cardData.id)" variant="tonal"><font-awesome-icon icon="trash-can" /></v-btn>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'CardItem',
    props: {
        cardData: {
            type: Object,
            default: () => ({}),
        },
    },
    computed: {
        currentLocale() {
            return this.$i18n.locale
        },
        currentCurrency() {
            return this.currentLocale === 'UA' ? '₴' : '£'
        },
    },
    methods: {
        ...mapActions('card', ['addCountProduct', 'subtractCountProduct', 'deleteProduct']),
    },
}
</script>

<style lang="scss" scoped>
.container-card {
    margin-top: 10px;
    display: flex;
    padding: 10px;
    gap: 15px;
    max-width: 100%;
    border: 1px solid blueviolet;
    &:not(:last-child) {
        margin-bottom: 10px;
    }
}
.card-picture {
    align-self: center;
    width: 174px;
    height: 169px;
}
.card-img {
    max-width: 100%;
}
.card-text {
    gap: 10px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 300px;
    justify-content: center;
}
.card-count {
    display: flex;
    gap: 30px;
    align-items: center;
}
.card-title {
    font-size: 22px;
    color: rgba(7, 143, 97, 0.795);
}
.card-description {
    font-size: 20px;
    color: brown;
}
.card-price {
    color: red;
}
</style>
