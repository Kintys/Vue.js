<template>
    <master-page>
        <div class="product-container">
            <div>
                <product-filter />
            </div>
            <div class="cards">
                <product-item
                    v-for="laptop in getFilteredLaptopList"
                    :key="laptop.id"
                    :product-data="laptop"
                ></product-item>
            </div>
        </div>
    </master-page>
</template>

<script>
import ProductFilter from '@/components/ProductFilter.vue'
import { mapGetters } from 'vuex'
import ProductItem from '@/components/ProductItem.vue'
import MasterPage from '@/master/MasterPage.vue'
export default {
    name: 'ProductView',
    components: {
        MasterPage,
        ProductItem,
        ProductFilter,
    },
    computed: {
        ...mapGetters('laptops', ['getFilteredLaptopList']),
    },
}
</script>

<style lang="scss" scoped>
.product-container {
    display: flex;
    gap: 20px;
}
.cards {
    border: 1px solid black;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(3, 300px);
    gap: 10px;
}
</style>
