<template>
    <main-master-page>
        <div class="filter">
            <router-link :to="{ name: 'filter' }">фільтер</router-link>
            <router-view name="filter"></router-view>
        </div>
        <div class="content card-box">
            <data-card
                v-for="product in getProductFilteredList()"
                :key="product.id"
                :card-props="{
                    price: product.price,
                    title: product.title,
                }"
            >
                <img class="image-card" :src="product.imgSrc" alt="#" />
            </data-card>
        </div>
        <div class="editor">
            <router-link :to="{ name: 'editor' }">editor</router-link>
            <router-view name="editor"></router-view>
        </div>
    </main-master-page>
</template>

<script>
import DataCard from '@/components/DataCard.vue'
import MainMasterPage from '@/MasterPage/MainMasterPage.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'ProductView',
    components: {
        MainMasterPage,
        DataCard,
    },
    computed: {
        ...mapGetters('product', ['getProductFilteredList']),
    },
}
</script>

<style lang="scss" scoped>
.filter {
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
}
.editor {
    display: flex;
    flex-direction: column;
    padding: 10px;
    justify-content: center;
    gap: 10px;
}

.image-card {
    max-width: 100%;
}
.card-box {
    gap: 15px;
    display: flex;
}
</style>
