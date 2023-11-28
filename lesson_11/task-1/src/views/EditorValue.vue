<template>
    <div class="editor-container">
        <input v-model="currentItem.title" type="text" />
        <input v-model="currentItem.property" type="number" />
        <button @click="onAction" type="submit">{{ actionBtnTitle }}</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'EditorValue',
    data() {
        return {
            currentItem: {
                title: null,
                property: null,
            },
            receivedParams: null,
        }
    },
    computed: {
        ...mapGetters('bus', ['getBusItemByid']),
        ...mapGetters('driver', ['getDriverById']),
        actionBtnTitle() {
            if (!this.receivedParams.id) return 'Add'
            else return 'Save'
        },
    },
    methods: {
        ...mapActions('driver', ['changeDriverValue', 'addNewDriverItem']),
        ...mapActions('bus', ['changeBusItem', 'addNewItem']),
        backToPreviousPage() {
            if (this.receivedParams.busEdit)
                this.$router.push({
                    name: 'driverAndBus',
                    params: {
                        bus: '/bus',
                    },
                })
            else
                this.$router.push({
                    name: 'driverAndBus',
                })
        },
        onAction() {
            if (!this.receivedParams.id) {
                if (this.receivedParams.busEdit) {
                    this.addNewItem(this.currentItem)
                    this.backToPreviousPage()
                } else {
                    this.addNewDriverItem(this.currentItem)
                    this.backToPreviousPage()
                }
            } else {
                if (this.receivedParams.busEdit) {
                    this.changeBusItem(this.currentItem)
                    this.backToPreviousPage()
                } else {
                    this.changeDriverValue(this.currentItem)
                    this.backToPreviousPage()
                }
            }
        },
    },
    created() {
        this.receivedParams = {
            id: this.$route.params.id,
            busEdit: this.$route.params.busEdit,
        }
        if (!this.receivedParams.busEdit && this.receivedParams.id)
            this.currentItem = { ...this.getDriverById(this.receivedParams.id) }
        else if (this.receivedParams.id) this.currentItem = { ...this.getBusItemByid(this.receivedParams.id) }
        else this.currentItem
    },
}
</script>

<style lang="scss" scoped>
.editor-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 20px;
}
</style>
