<template>
    <div class="error">
        <v-dialog v-model="dialog" activator="parent" width="auto">
            <v-card>
                <v-card-text>{{ errorValue }} </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" block @click="onClose">Close Dialog</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'ErrorMessage',
    props: {
        errorValue: {
            type: Object,
            requite: true,
        },
    },
    data() {
        return {
            dialog: false,
        }
    },
    methods: {
        ...mapActions('auth', ['clearError']),
        onClose() {
            this.dialog = false
            this.clearError(null)
        },
    },
    created() {
        this.dialog = true
    },
}
</script>

<style lang="scss" scoped></style>
