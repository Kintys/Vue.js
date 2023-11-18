<template>
    <div class="editor">
        <div class="editor__body">
            <label>Title <input type="text" v-model="currentCompanyData.company" /></label>
            <label>Rate <input type="text" v-model="currentCompanyData.rate" /></label>
            <label>Year <input type="text" v-model="currentCompanyData.year" /></label>
            <label>Owner <input type="text" v-model="currentCompanyData.owner" /></label>
        </div>
        <div class="editor__btn">
            <button v-if="getIdCompany" @click="onEdit" type="submit">Save</button>
            <button v-else @click="onCreate" type="submit">Create</button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'CompanyEditor',
    data() {
        return {
            currentCompanyData: {},
        }
    },
    computed: {
        ...mapGetters(['getFoundCompany']),
        getIdCompany() {
            return this.$route.params.id
        },
    },
    methods: {
        ...mapActions(['newCopmany', 'editCompany']),
        onCreate() {
            this.newCopmany(this.currentCompanyData)
            this.$router.push({
                name: 'company',
            })
        },
        onEdit() {
            this.editCompany(this.currentCompanyData)
            this.$router.push({
                name: 'company',
            })
        },
    },
    created() {
        if (this.getIdCompany) {
            this.currentCompanyData = this.getFoundCompany(this.getIdCompany)
        }
    },
}
</script>

<style lang="scss" scoped>
.editor {
    // .editor__body

    &__body {
        display: flex;
        flex-direction: column;
        gap: 10px;
        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }

    // .editor__btn

    &__btn {
    }
}
</style>
