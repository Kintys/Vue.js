<template>
    <div>
        <div class="container">
            <a :href="laptopCardItem.link" class="body-image">
                <img :src="laptopCardItem.imgSrc" alt="laptop" />
            </a>
            <div class="body-content">
                <a :href="laptopCardItem.link" class="body-title">{{ laptopCardItem.title }}</a>
                <p class="body-description">{{ laptopCardItem.description }}</p>
                <p class="body-prise">{{ laptopCardItem.price }} ₴</p>
                <button @click="addProductToCard(laptopCardItem.id)" type="submit" class="button">Додати</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'ProductItem',
    props: {
        laptopCardItem: {
            type: Object,
            default: () => ({}),
        },
    },
    methods: {
        ...mapActions('card', ['addProductId']),
        addProductToCard(prodId) {
            this.addProductId(prodId)
        },
    },
}
</script>

<style lang="scss" scoped>
.container {
    border: 1px solid rgba(128, 128, 128, 0.505);
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    height: 100%;
}
.body-image {
    width: 200px;
}
.body-image img {
    width: 100%;
}
.body-content {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 10px;
}
.body-title {
    font-size: 18px;
    text-decoration: none;
    color: red;
}
.body-description {
    font-weight: 600;
    font-style: italic;
    flex-grow: 1;
}
.body-prise {
    color: orange;
    font-size: 20px;
}
</style>
