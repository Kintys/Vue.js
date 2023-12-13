<template>
    <div class="container">
        <div class="select">
            <v-select
                v-model="assigmentObj.driverId"
                :items="getDriversList"
                item-value="id"
                variant="solo"
                label="Водії"
                clearable
            ></v-select>
        </div>
        <div class="select">
            <v-select
                v-model="assigmentObj.busId"
                :items="getBusList"
                item-value="id"
                variant="solo"
                label="Автобуси"
                clearable
            ></v-select>
        </div>
        <v-btn @click="onAdd" variant="text"> Add</v-btn>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'AssigmentSelect',
    data() {
        return {
            assigmentObj: {},
        }
    },
    computed: {
        ...mapGetters('drivers', ['getDriversList']),
        ...mapGetters('bus', ['getBusList']),
    },
    methods: {
        ...mapActions('assigment', ['addAssigmentItem']),
        onAdd() {
            this.addAssigmentItem(this.assigmentObj)
        },
    },
}
</script>

<style lang="scss" scoped>
.container {
    align-items: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.select {
    width: 300px;
}
</style>
