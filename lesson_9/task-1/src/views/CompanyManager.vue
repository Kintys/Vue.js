<template>
    <div class="container">
        <filter-company />
        <companies-list />
        <button @click="onEditor">Create company</button>
    </div>
</template>

<script>
import CompaniesList from '@/components/CompaniesList.vue'
import FilterCompany from '@/components/FilterCompany.vue'
export default {
    name: 'CompanyManager',
    components: {
        CompaniesList,
        FilterCompany,
    },
    methods: {
        onEditor() {
            this.$router.push({
                name: 'editor',
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.container {
    &:not(:last-child) {
        margin-bottom: 10px;
    }
    width: 800px;
    padding: 30px;
    border: 1px solid black;
}
</style>
