<template>
    <div class="container">
        <card-filter />
        <card-list />
    </div>
</template>

<script>
import CardFilter from '@/components/CardManager/CardFilter.vue'
import CardList from '@/components/CardManager/CardList.vue'
import { mapGetters } from 'vuex'
export default {
    name: 'CardManager',
    components: {
        CardFilter,
        CardList,
    },
    computed: {
        ...mapGetters(['getFullList']),
    },
}
</script>

<style lang="scss" scoped>
.container {
    padding: 50px;
    width: 300px;
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.filter {
}
.list {
}
</style>
