<template>
    <master-page>
        <div class="editor">
            <div class="action">
                <v-btn @click="onAction" variant="tonal">
                    {{ actionBtnTitle }}
                </v-btn>
            </div>
            <v-text-field
                v-model="editObj.title"
                :label="$t('editor.title')"
                :rules="rules"
                hide-details="auto"
            ></v-text-field>
            <v-text-field
                v-model="editObj.imgSrc"
                :label="$t('editor.photo')"
                :rules="rules"
                hide-details="auto"
            ></v-text-field>
            <v-text-field
                v-model="editObj.seller"
                :label="$t('editor.seller')"
                :rules="rules"
                hide-details="auto"
            ></v-text-field>
            <v-text-field
                v-model="editObj.brand"
                :label="$t('editor.brand')"
                :rules="rules"
                hide-details="auto"
            ></v-text-field>
            <v-text-field
                v-model="editObj.link"
                :label="$t('editor.link')"
                :rules="rules"
                hide-details="auto"
            ></v-text-field>
            <v-text-field
                v-model="editObj.description.UA"
                :label="$t('editor.descriptionUa')"
                :rules="rules"
                hide-details="auto"
            ></v-text-field>
            <v-text-field
                v-model="editObj.description.GB"
                :label="$t('editor.descriptionGb')"
                :rules="rules"
                hide-details="auto"
            ></v-text-field>
            <v-text-field
                v-model="editObj.price.UA"
                :label="$t('editor.priceUa')"
                :rules="rules"
                hide-details="auto"
            ></v-text-field>
            <v-text-field
                v-model="editObj.price.GB"
                :label="$t('editor.priceGb')"
                :rules="rules"
                hide-details="auto"
            ></v-text-field>
        </div>
        {{ editObj }}
    </master-page>
    <error-message v-if="error" :error-value="error" />
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MasterPage from '@/master/MasterPage.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'
export default {
    name: 'EditorView',
    components: {
        ErrorMessage,
        MasterPage,
    },
    data() {
        return {
            error: null,
            editObj: {
                description: {},
                price: {},
            },
        }
    },
    computed: {
        ...mapGetters('laptops', ['getLaptopsById']),
        actionBtnTitle() {
            if (!this.receivedParams.id) return this.$t('editorButton.add')
            else return this.$t('editorButton.save')
        },
    },
    methods: {
        ...mapActions('laptops', ['addLaptopsItem', 'updateLaptops', 'getError']),
        async onAction() {
            try {
                if (this.receivedParams.id) await this.updateLaptops(this.editObj)
                else await this.addLaptopsItem(this.editObj)
                this.$router.push({
                    name: 'product',
                })
            } catch {
                if (this.getError) this.error = this.editObj
            }
        },
    },
    created() {
        this.receivedParams = {
            id: this.$route.params.id,
        }
        if (this.receivedParams.id) this.editObj = this.getLaptopsById(this.receivedParams.id)
        else this.editObj
    },
}
</script>

<style lang="scss" scoped>
.editor {
    display: grid;
    gap: 0.3125rem;
}
</style>
