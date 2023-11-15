<template>
    <div class="container">
        <div class="filter">
            <label class="filter__label">
                Тип транспорта
                <select v-model="filteringParameters.categoryId" class="select">
                    <option
                        v-for="category in getCategoryList"
                        :key="category.id"
                        :value="category.id"
                        class="select__opt"
                    >
                        {{ category.titleCategory }}
                    </option>
                </select>
            </label>
            <div v-if="this.filteringParameters.categoryId" class="filter__checkbox">
                <div class="filter__label">Колір</div>
                <label v-for="color in getColorList" :key="color">
                    <input :value="color" type="checkbox" v-model="filteringParameters.color" />
                    {{ color }}
                </label>
                <label class="filter__label">
                    Марка
                    <select class="select" v-model="filteringParameters.mark">
                        <option value="">Не обрано</option>
                        <option v-for="mark in getMarkList" :key="mark" :value="mark">{{ mark }}</option>
                    </select>
                </label>
                <label class="filter__label">
                    Рік
                    <div class="filter__year">
                        <select v-model="filteringParameters.year" class="select">
                            <option value="">Не обрано</option>
                            <option v-for="year in getYearList" :value="year" :key="year" class="select__opt">
                                {{ year }}
                            </option>
                        </select>
                    </div>
                </label>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'CardFilter',
    data() {
        return {
            chosenCategory: null,
            filteringParameters: {
                categoryId: null,
                color: [],
                mark: null,
                year: null,
            },
        }
    },

    computed: {
        ...mapGetters(['getCategoryList', 'getParametersItemList']),
        getColorList() {
            return this.getParametersItemList('color')
        },
        getMarkList() {
            return this.getParametersItemList('mark')
        },
        getYearList() {
            return this.getParametersItemList('year')
        },
    },
    watch: {
        filteringParameters: {
            handler(newValue) {
                this.selectedParameter(newValue)
            },
            deep: true,
        },
    },
    methods: {
        ...mapActions(['selectedParameter']),
    },
}
</script>

<style lang="scss" scoped>
.filter {
    padding: 30px;
    display: flex;
    border: 1px solid black;
    flex-direction: column;
    gap: 15px;

    // .filter__label

    &__label {
        display: flex;
        flex-direction: column;
        font-size: 25px;
        font-weight: 700;
        gap: 10px;
    }
    &__checkbox {
        display: flex;
        flex-direction: column;
        font-size: 20px;
        gap: 5px;
    }
    &__year {
        display: flex;
        gap: 5px;
    }
}
.select {
    font-size: 20px;
    // .select__opt

    &__opt {
    }
}
</style>
