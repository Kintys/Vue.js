<template>
    <div class="filter">
        <h2 class="filter__title">Filter</h2>
        <div class="filter__value">
            <label class="filter__lable">Title<input v-model.lazy="filterObject.titleValue" type="text" /> </label>
            <label class="filter__lable">Rate<input v-model.lazy="filterObject.rateValue" type="text" /></label>
            <label class="filter__lable">Year<input v-model.lazy="filterObject.yearValue" type="text" /></label>
            <label class="filter__lable">Owner<input v-model.lazy="filterObject.ownerValue" type="text" /></label>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'FilterCompany',
    data() {
        return {
            filterObject: {},
        }
    },
    watch: {
        'filterObject.titleValue'(newValue) {
            this.filterValue({
                params: 'company',
                value: newValue,
            })
        },
        'filterObject.rateValue'(newValue) {
            this.filterValue({
                params: 'rate',
                value: newValue,
            })
        },
        'filterObject.yearValue'(newValue) {
            this.filterValue({
                params: 'year',
                value: newValue,
            })
        },
        'filterObject.ownerValue'(newValue) {
            this.filterValue({
                params: 'owner',
                value: newValue,
            })
        },
    },
    methods: {
        ...mapActions(['filterValue']),
    },
}
</script>

<style lang="scss" scoped>
.filter {
    // .filter__title
    padding: 20px;
    border: 1px solid black;
    &:not(:last-child) {
        margin-bottom: 20px;
    }

    &__value {
        display: flex;
        justify-content: space-between;
    }
    &__title {
    }

    // .filter__lable

    &__lable {
        margin-left: 10px;
    }
}
</style>
