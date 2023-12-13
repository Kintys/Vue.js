<template>
    <main-master-page>
        <v-card class="mx-none" max-width="500">
            <v-list class="list">
                <assigment-item
                    v-for="assigment in getAssigmentWithTitles"
                    :key="assigment.id"
                    :assigment-data-item="assigment"
                />
            </v-list>
        </v-card>
        <assigment-select />
    </main-master-page>
</template>

<script>
import AssigmentSelect from '@/components/AssigmentSelect.vue'
import { mapGetters } from 'vuex'
import MainMasterPage from '@/MasterPage/MainMasterPage.vue'
import AssigmentItem from '@/components/AssigmentItem.vue'
export default {
    name: 'AssigmentView',
    components: {
        MainMasterPage,
        AssigmentItem,
        AssigmentSelect,
    },
    computed: {
        ...mapGetters('assigment', ['getAssigmentWithTitles']),
    },
}
</script>

<style lang="scss" scoped>
.list {
    padding: 10px;
}
.mx-none {
    &:not(:last-child) {
        margin-bottom: 20px;
    }
}
</style>
