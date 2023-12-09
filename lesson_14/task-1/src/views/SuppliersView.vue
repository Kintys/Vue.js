<template>
    <main-master-page>
        <div class="card-box">
            <data-card
                v-for="supplier in getSuppliersList"
                :key="supplier.id"
                :card-props="{
                    title: supplier.title,
                }"
            >
                <img :src="supplier.imgSrc" alt="#" class="image-card" />
                <template #subTitle>
                    <font-awesome-icon v-for="icon in supplier.icons" :key="icon.id" :icon="icon.iconTitle" />
                </template>
            </data-card>
        </div>
        <template #rating>
            <div>
                Найбільш популярний : <span class="rating-color">{{ getTopRating }} </span>
            </div>
        </template>
    </main-master-page>
</template>

<script>
import { mapGetters } from 'vuex'
import DataCard from '@/components/DataCard.vue'
import MainMasterPage from '@/MasterPage/MainMasterPage.vue'
export default {
    name: 'SuppliersView',
    components: {
        MainMasterPage,
        DataCard,
    },
    computed: {
        ...mapGetters('suppliers', ['getSuppliersList']),
        getTopRating() {
            return this.getSuppliersList.find((provide) => Math.max(provide.rating)).title
        },
    },
}
</script>

<style lang="scss" scoped>
.rating-color {
    color: #42b983;
}
.image-card {
    max-width: 100%;
}
.card-box {
    gap: 15px;
    display: flex;
}
</style>
