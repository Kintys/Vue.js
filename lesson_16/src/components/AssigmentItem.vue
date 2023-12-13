<template>
    <div class="assigment-item">
        <div>{{ assigmentDataItem.driver }}</div>
        <div>{{ assigmentDataItem.bus }}</div>
        <v-btn @click="onDelete" variant="text"> <font-awesome-icon icon="trash" /> </v-btn>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'AssigmentItem',
    props: {
        assigmentDataItem: { type: Object, default: () => ({}) },
    },
    methods: {
        ...mapActions('assigment', ['deleteAssigment']),
        onDelete() {
            this.deleteAssigment(this.assigmentDataItem.id)
        },
    },
}
</script>

<style lang="scss" scoped>
.assigment-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
