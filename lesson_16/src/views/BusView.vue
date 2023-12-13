<template>
    <main-master-page>
        <data-list>
            <div>
                <v-card class="mx-none" max-width="500">
                    <v-list v-for="bus in getBusList" :key="bus.id" class="list">
                        <data-item
                            @edit="onEdit"
                            @delete="onDelete"
                            :data-obj="bus"
                            title-item="Номер"
                            subtitle-item="Кількість місць"
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
import DataItem from '@/components/DataItem.vue'
export default {
    name: 'DriversView',
    components: {
        MainMasterPage,
        DataItem,
        DataList,
    },
    computed: {
        ...mapGetters('bus', ['getBusList']),
        ...mapGetters('assigment', ['getAssigmentByBusId']),
    },
    methods: {
        ...mapActions('bus', ['deleteBus']),
        ...mapActions('assigment', ['deleteAssigment']),
        onEdit(id) {
            this.$router.push({
                name: 'editor',
                params: {
                    id: id,
                    busEdit: 'busEdit',
                },
            })
        },
        onDelete(id) {
            const foundId = this.getAssigmentByBusId(id)
            if (foundId) this.deleteAssigment(foundId.id)
            this.deleteBus(id)
        },
        onAdd() {
            this.$router.push({
                name: 'editor',
                params: {
                    busEdit: 'busEdit',
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped></style>
