<template>
    <div class="creater">
        <h2 class="creater__title">Нове призначення</h2>
        <div class="creater__block">
            <label class="creater__select">
                <select v-model="assigmentData.driverId">
                    <option v-for="driver in getDriverList" :key="driver.id" :value="driver.id">
                        {{ driver.title }}
                    </option>
                </select>
            </label>
            <label class="creater__select">
                <select v-model="assigmentData.busId">
                    <option v-for="bus in getBusList" :key="bus.id" :value="bus.id">
                        {{ bus.title }}
                    </option>
                </select>
            </label>
            <button @click="onAddAssigm" type="submit">Додати</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'AssigmentCreater',
    data() {
        return {
            assigmentData: {},
        }
    },
    computed: {
        ...mapGetters('driver', ['getDriverList']),
        ...mapGetters('bus', ['getBusList']),
    },
    methods: {
        ...mapActions('assigment', ['addAssigmentAction']),
        onAddAssigm() {
            this.addAssigmentAction(this.assigmentData)
            this.assigmentData = {}
        },
    },
    created() {},
}
</script>

<style lang="scss" scoped>
.creater {
    margin-left: 20px;
    // .creater__title
    &__block {
        display: flex;
        gap: 10px;
    }
}
</style>
