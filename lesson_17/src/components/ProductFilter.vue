<template>
    <div class="filter-container">
        <div class="filter-seller">
            <label v-for="seller in getSellerList" :key="`seller=${seller}`">
                <input type="checkbox" v-model="filterValue.seller" :value="seller" />
                {{ seller }}
            </label>
        </div>
        <v-text-field
            class="brand-filter"
            :label="$t('filter.inputPlaceholder')"
            v-model.lazy="brandFilter"
            hide-details="auto"
        ></v-text-field>
        <div class="filter-seller">
            <label v-for="brand in filterBrandList" :key="`brand=${brand}`">
                <input type="checkbox" v-model="filterValue.brand" :value="brand" />
                {{ brand }}
            </label>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'ProductFilter',
    data() {
        return {
            brandFilter: null,
            filterValue: {
                seller: [],
                brand: [],
            },
        }
    },
    computed: {
        ...mapGetters('laptops', ['getSellerList', 'getBrandList']),

        filterBrandList() {
            if (this.brandFilter) {
                return this.getBrandList.filter((item) => item.toLowerCase().includes(this.brandFilter.toLowerCase()))
            }
            return this.getBrandList
        },
    },
    methods: {
        ...mapActions('laptops', ['addFilterValue']),
    },
    watch: {
        filterValue: {
            handler(newValue) {
                this.addFilterValue(newValue)
            },
            deep: true,
        },
    },
}
</script>

<style lang="scss" scoped>
.filter-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 10px;
    border: 1px solid black;
    width: 200px;
}
.filter-seller {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>
