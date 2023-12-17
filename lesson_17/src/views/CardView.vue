<template>
    <master-page>
        <card-item v-for="card in getCardListById" :key="card.id" :card-data="card" />
    </master-page>
</template>

<script>
import CardItem from '@/components/CardItem.vue'
import { mapGetters } from 'vuex'
import MasterPage from '../master/MasterPage.vue'
export default {
    name: 'CardView',
    components: {
        MasterPage,
        CardItem,
    },
    computed: {
        ...mapGetters('card', ['getCardListById']),
    },
}
</script>

<style lang="scss" scoped></style>
