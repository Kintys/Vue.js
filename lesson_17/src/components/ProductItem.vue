<template>
    <div class="container-card">
        <div class="admin-container" v-if="userPermissions.write">
            <v-btn @click="onAdd" variant="tonal"><font-awesome-icon icon="plus" /></v-btn>
            <v-btn @click="onEdit" variant="tonal"><font-awesome-icon icon="marker" /></v-btn>
            <v-btn @click="onDelete" variant="tonal"><font-awesome-icon icon="trash-can" /></v-btn>
        </div>
        <a :href="productData.link" class="card-picture">
            <img class="card-img" :src="productData.imgSrc" alt="#" />
        </a>
        <div class="card-text">
            <h4 class="card-title">{{ productData.title }}</h4>
            <p class="card-description">{{ productData.description[currentLocale] }}</p>
        </div>
        <p class="card-price">{{ productData.price[currentLocale] }} {{ currentCurrency }}</p>
        <v-btn @click="addProduct" variant="tonal">{{ $t('product.button') }}</v-btn>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name: 'ProductItem',
    props: {
        productData: {
            type: Object,
            default: () => ({}),
        },
    },
    computed: {
        ...mapGetters('users', ['userPermissions']),
        currentLocale() {
            return this.$i18n.locale
        },
        currentCurrency() {
            return this.currentLocale === 'UA' ? '₴' : '£'
        },
    },
    methods: {
        ...mapActions('laptops', ['deleteLaptops']),
        ...mapActions('card', ['addProductToList']),
        addProduct() {
            this.addProductToList(this.productData.id)
        },
        onDelete() {
            this.deleteLaptops(this.productData.id)
        },
        onAdd() {
            this.$router.push({
                name: 'editor',
            })
        },
        onEdit() {
            this.$router.push({
                name: 'editor',
                params: {
                    id: this.productData.id,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.container-card {
    display: flex;
    flex-direction: column;
    flex: 1 1 300px;
    max-width: 300px;
    text-align: center;
    padding: 20px;
    gap: 15px;
    min-height: 100%;
    position: relative;

    &:hover {
        outline: 1px solid saddlebrown;
    }
}
.admin-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
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
    justify-content: center;
    flex-grow: 1;
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
