<template>
    <div class="assigment">
        <div class="assigment__block">
            <h2>Призначення</h2>
            <div class="assigment__list">
                <div class="assigment__title">
                    <div>Шофер</div>
                    <div>Номер автобуса</div>
                </div>
                <div v-for="{ id, driver, bus } in getAssigmentList" :key="id" class="assigment__item">
                    <div class="assigment__driver">{{ driver }}</div>
                    <div class="assigment__bus">{{ bus }}</div>
                    <button @click="onDelete(id)" type="submit" class="assigment__button">
                        <i class="fa fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'AssigmentList',
    computed: {
        ...mapGetters('assigment', ['getAssigmentList']),
    },
    methods: {
        ...mapActions('assigment', ['deleteAssigmetById']),
        onDelete(id) {
            this.deleteAssigmetById(id)
        },
    },
}
</script>

<style lang="scss" scoped>
.assigment {
    // .assigment__block
    margin-left: 20px;
    padding: 20px;
    border: 1px solid black;
    width: 350px;
    &__list {
        width: 300px;
    }

    // .assigment__title

    &__title {
        display: flex;
        justify-content: space-around;
    }

    // .assigment__item

    &__item {
        display: flex;
    }
    &__driver {
        flex-grow: 1;
    }
    &__bus {
    }
    // .assigment__button

    &__button {
        margin-left: 5px;
    }
}
.fa {
}
.fa-trash {
}
</style>
