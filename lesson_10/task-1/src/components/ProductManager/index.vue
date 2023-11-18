<template>
    <div class="container">
        <router-link :to="{ name: 'shoppingCard' }">
            <div class="cardImg">
                <span class="cardImg__count">{{ showNumberProduct }}</span>
                <i class="fa fa-shopping-cart" style="font-size: 40px"></i>
            </div>
        </router-link>
        <div class="block">
            <div class="filter-block">
                <products-filters />
            </div>
            <div class="grid-box">
                <product-item v-for="laptop of getFilteredLaptopList" :key="laptop.id" :laptop-card-item="laptop" />
            </div>
        </div>
    </div>
</template>

<script>
import ProductsFilters from './ProductsFilters.vue'
import ProductItem from './ProductItem.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'ProductManager',
    components: { ProductItem, ProductsFilters },

    computed: {
        ...mapGetters('laptop', ['getFilteredLaptopList']),
        ...mapGetters('card', ['getShoppindCard']),
        showNumberProduct() {
            return this.getShoppindCard.length
        },
    },

    methods: {},
}
</script>

<style lang="scss" scoped>
.block {
    display: grid;
    grid-template-columns: 250px auto;
    padding: 10px;
}
.filter-block {
    margin-right: 50px;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    border: 1px solid black;
    align-items: flex-start;
    padding: 10px;
}
.grid-box {
    display: grid;
    grid-template-columns: 300px 300px 300px;
    grid-template-rows: 450px;
    gap: 30px;
}
.cardImg {
    position: absolute;
    top: 20px;
    right: 10px;
    width: 80px;
    height: 80px;
    display: inline-block;
    &__count {
        font-size: 35px;
    }
}
</style>
