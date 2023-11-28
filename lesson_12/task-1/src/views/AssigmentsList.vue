<template>
    <div class="container">
        <div class="assigment">
            <div class="assigment__title">
                <h5>ПІБ</h5>
                <h5>Спеціалізація</h5>
                <h5>Клас</h5>
                <h5>Предмет</h5>
                <h5>Час</h5>
            </div>
            <list-item
                v-for="item in getAssigmentList"
                :key="item.id"
                :list-item-obj="item"
                class="assigment__content"
                @delete="onDelete"
                @edit="onEdit"
            />
        </div>

        <button @click="toAdd" class="assigment-button button">Додати</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import ListItem from '@/components/ListItem.vue'
export default {
    name: 'AssigmentsList',
    components: {
        ListItem,
    },
    computed: {
        ...mapGetters('assigment', ['getAssigmentList']),
    },
    methods: {
        ...mapActions('assigment', ['deleteAggigmetById']),
        toAdd() {
            this.$router.push({
                name: 'addAssigment',
            })
        },
        onDelete(assigmentId) {
            this.deleteAggigmetById(assigmentId)
        },
        onEdit(editId) {
            this.$router.push({
                name: 'addAssigment',
                params: {
                    id: editId,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.container {
    padding: 20px;
    width: 800px;
}
.assigment {
    display: grid;
    gap: 10px;
    &:not(:last-child) {
        margin-bottom: 10px;
    }
    grid-template-columns: auto;
    grid-template-rows: repeat(2, auto);
    // .assigment__title

    &__title {
        display: grid;
        grid-template-columns: repeat(5, 120px);
        justify-items: center;
    }

    // .assigment__content

    &__content {
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(6, 120px);
    }
}
</style>
