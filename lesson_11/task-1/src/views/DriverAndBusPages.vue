<template>
    <div class="container list">
        <h2 class="list__title">{{ showList.currentNames.mainTitle }}</h2>
        <div v-if="!receivedByPageParams" class="list__filter">
            <label>
                Фільтри: ПІБ
                <input v-model.lazy="filterData.name" type="text" />
            </label>
            <label>
                Стаж: від <input v-model.lazy="filterData.expMin" type="number" /> до
                <input v-model.lazy="filterData.expMax" type="number"
            /></label>
            <button @click="onReset" type="submit" class="button">Reset Filter</button>
        </div>
        <div class="list__content">
            <div class="list__category-title">
                <h3 class="list__subtitle">{{ showList.currentNames.listTitle }}</h3>
                <h3 class="list__subtitle">{{ showList.currentNames.subTitleList }}</h3>
            </div>
        </div>
        <div class="list__item-container">
            <div v-for="item in showList.list" :key="item.id" class="list__item">
                <span class="list__name">{{ item.title }}</span
                ><span>{{ item.property }}</span>
                <div class="list__btn">
                    <button @click="onEdit(item.id)" type="submit"><i class="fa fa-pencil"></i></button>
                    <button @click="onDelete(item.id)" type="submit"><i class="fa fa-trash"></i></button>
                </div>
            </div>
        </div>
        <button class="list-btn" @click="onAdd" type="submit">Додати</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'DriverAndBusPages',
    data() {
        return {
            filterData: {},
        }
    },
    computed: {
        ...mapGetters('driver', ['getFilteredDriverList']),
        ...mapGetters('bus', ['getBusList']),
        receivedByPageParams() {
            return this.$route.params.bus
        },
        showList() {
            if (!this.receivedByPageParams)
                return {
                    currentNames: {
                        mainTitle: 'Наші Водії',
                        listTitle: 'ПІБ',
                        subTitleList: 'Стаж',
                    },
                    list: this.getFilteredDriverList,
                }
            else
                return {
                    currentNames: {
                        mainTitle: 'Наші Автобуси',
                        listTitle: 'Номер',
                        subTitleList: 'Кількість місць',
                    },
                    list: this.getBusList,
                }
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
    methods: {
        ...mapActions('driver', ['loadDriverList', 'upDateFilterData', 'deleteDriverItem']),
        ...mapActions('bus', ['loadBusList', 'deleteBusItem']),
        onDelete(id) {
            this.receivedByPageParams ? this.deleteBusItem(id) : this.deleteDriverItem(id)
        },
        onEdit(id) {
            if (this.receivedByPageParams) {
                this.$router.push({
                    name: 'editor',
                    params: {
                        id: id,
                        busEdit: '/busEdit',
                    },
                })
            } else
                this.$router.push({
                    name: 'editor',
                    params: {
                        id: id,
                    },
                })
        },
        onAdd() {
            if (this.receivedByPageParams) {
                this.$router.push({
                    name: 'editor',
                    params: {
                        busEdit: '/busEdit',
                    },
                })
            } else {
                this.$router.push({
                    name: 'editor',
                })
            }
        },
        onReset() {
            this.filterData = {}
        },
    },
}
</script>

<style lang="scss" scoped>
.container {
    padding: 20px;
}
.list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    &__content {
        padding: 10px;
        width: 300px;
    }
    &__item-container {
        width: 340px;
    }
    &__category-title {
        display: flex;
        justify-content: space-between;
    }

    &__item {
        display: flex;
    }
    &__name {
        flex-grow: 1;
    }
    &__btn {
        margin-left: 10px;
    }
}
.list-btn {
    width: 100px;
}
.fa {
}
.fa-pencil {
}
.fa-trash {
}
</style>
