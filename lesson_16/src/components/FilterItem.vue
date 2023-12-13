<template>
    <div class="container">
        <div class="filter">
            <v-text-field
                v-model.lazy="filterData.title"
                label="ПІБ"
                hide-details="auto"
                class="filter__name"
            ></v-text-field>
            <v-text-field
                v-model.lazy="filterData.expMin"
                label="Від"
                hide-details="auto"
                class="filter__start"
            ></v-text-field>
            <v-text-field
                v-model.lazy="filterData.expMax"
                label="До"
                hide-details="auto"
                class="filter__end"
            ></v-text-field>
        </div>
        <v-btn @click="onReset" variant="tonal" class="filter__btn"> Reset </v-btn>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'FilterItem',
    data() {
        return {
            filterData: {},
        }
    },
    methods: {
        ...mapActions('drivers', ['upDateFilterData']),
        onReset() {
            this.filterData = {}
        },
    },
    watch: {
        filterData: {
            handler(newValue) {
                this.upDateFilterData(newValue)
            },
            deep: true,
        },
    },
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    gap: 10px;
    padding: 10px;
    justify-content: center;
    align-items: center;
}
.filter {
    display: flex;
    gap: 10px;
    // .filter__name

    &__name {
        width: 300px;
    }

    // .filter__start

    &__start {
        width: 80;
    }

    // .filter__end

    &__end {
        width: 80;
    }

    // .filter__btn

    &__btn {
    }
}
</style>
