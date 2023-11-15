<template>
    <div class="container">
        <card-item v-for="item in getFilterList" :key="item.id" :card="item" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CardItem from './CardItem.vue'
export default {
    name: 'CardList',
    components: {
        CardItem,
    },
    computed: {
        ...mapGetters(['getFilterList']),
    },
}
</script>

<style lang="scss" scoped>
.container {
    width: 400px;
    display: grid;
    grid-template-columns: repeat(2, auto);
    gap: 10px;
}
</style>
