<template>
    <div class="seller">
        <h4 class="seller__title">Продавець</h4>
        <div class="seller__block">
            <label class="seller__box" v-for="seller in getSellerList" :key="seller.sellerId">
                {{ seller.title }}
                <input v-model="filterObj.sellerId" type="checkbox" :value="seller.sellerId" />
            </label>
        </div>
    </div>
    <div class="brand">
        <h4 class="brand__title">Бренд</h4>
        <div class="brand__block">
            <label class="brand__box" v-for="brand in getBrandlist" :key="brand.brandId">
                {{ brand.title }}
                <input v-model="filterObj.brandId" type="checkbox" :value="brand.brandId" />
            </label>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'ProductsFilters',
    data() {
        return {
            filterObj: {
                sellerId: [],
                brandId: [],
            },
        }
    },
    computed: {
        ...mapGetters('brand', ['getBrandlist']),
        ...mapGetters('seller', ['getSellerList']),
    },
    methods: {
        ...mapActions('laptop', ['addFilterValue']),
    },
    watch: {
        filterObj: {
            handler(newValue) {
                this.addFilterValue(newValue)
            },
            deep: true,
        },
    },
}
</script>

<style lang="scss" scoped>
.seller {
    // .seller__title

    &__title {
    }

    // .seller__block

    &__block {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    // .seller__box

    &__box {
    }
}

.brand {
    // .brand__title

    &__title {
    }

    // .brand__block

    &__block {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    // .brand__box

    &__box {
    }
}
</style>
