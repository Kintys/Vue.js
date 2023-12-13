<template>
    <div class="editor-container">
        <v-text-field v-model="currentItem.title" label="ПІБ" :rules="rules" hide-details="auto"></v-text-field>
        <v-text-field v-model="currentItem.property" label="Стаж" :rules="rules" :hide-details="true"></v-text-field>
        <v-btn @click="onAction" variant="tonal">
            {{ actionBtnTitle }}
        </v-btn>
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
        ...mapGetters('bus', ['getBusById']),
        ...mapGetters('drivers', ['getDriversById']),
        actionBtnTitle() {
            if (!this.receivedParams.id) return 'Add'
            else return 'Save'
        },
    },
    methods: {
        ...mapActions('drivers', ['updateDrivers', 'addDriversItem']),
        ...mapActions('bus', ['updateBus', 'addBusItem']),
        backToPreviousPage() {
            if (this.receivedParams.busEdit)
                this.$router.push({
                    name: 'bus',
                })
            else
                this.$router.push({
                    name: 'drivers',
                })
        },

        onAction() {
            if (!this.receivedParams.id) {
                if (this.receivedParams.busEdit) {
                    this.addBusItem(this.currentItem)
                    this.backToPreviousPage()
                } else {
                    this.addDriversItem(this.currentItem)
                    this.backToPreviousPage()
                }
            } else {
                if (this.receivedParams.busEdit) {
                    this.updateBus({
                        itemId: this.receivedParams.id,
                        data: {
                            title: this.currentItem.title,
                            property: this.currentItem.property,
                        },
                    })
                    this.backToPreviousPage()
                } else {
                    this.updateDrivers({
                        itemId: this.receivedParams.id,
                        data: {
                            title: this.currentItem.title,
                            property: this.currentItem.property,
                        },
                    })
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
            this.currentItem = { ...this.getDriversById(this.receivedParams.id) }
        else if (this.receivedParams.id) this.currentItem = { ...this.getBusById(this.receivedParams.id) }
        else this.currentItem
    },
}
</script>

<style lang="scss" scoped>
.editor-container {
    display: flex;
    flex-direction: column;
    width: 300px;
    gap: 10px;
    padding: 20px;
}
</style>
