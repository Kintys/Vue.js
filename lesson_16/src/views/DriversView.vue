<template>
    <main-master-page>
        <filter-item />
        <data-list>
            <div>
                <v-card class="mx-none" max-width="500">
                    <v-list v-for="driver in getFilteredDriverList" :key="driver.id" class="list">
                        <data-item
                            @edit="onEdit"
                            @delete="onDelete"
                            :data-obj="driver"
                            title-item="ПІБ"
                            subtitle-item="Стаж"
                        />
                    </v-list>
                </v-card>
            </div>
            <v-btn @click="onAdd"> Add </v-btn>
        </data-list>
    </main-master-page>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DataList from '@/components/DataList.vue'
import MainMasterPage from '@/MasterPage/MainMasterPage.vue'
import FilterItem from '@/components/FilterItem.vue'
import DataItem from '@/components/DataItem.vue'
export default {
    name: 'DriversView',
    components: {
        MainMasterPage,
        FilterItem,
        DataItem,
        DataList,
    },
    computed: {
        ...mapGetters('drivers', ['getFilteredDriverList']),
        ...mapGetters('assigment', ['getAssigmentByDriverId']),
    },
    methods: {
        ...mapActions('drivers', ['deleteDrivers']),
        ...mapActions('assigment', ['deleteAssigment']),
        onEdit(id) {
            this.$router.push({
                name: 'editor',
                params: {
                    id: id,
                },
            })
        },
        onDelete(id) {
            const foundId = this.getAssigmentByDriverId(id)
            if (foundId) this.deleteAssigment(foundId.id)
            this.deleteDrivers(id)
        },
        onAdd() {
            this.$router.push({
                name: 'editor',
            })
        },
    },
}
</script>

<style lang="scss" scoped></style>
