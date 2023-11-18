<template>
    <div class="container">
        <h2>Companies list</h2>
        <company-item v-for="company of getFilterCompanyList" :key="company.id" :company-item="company" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CompanyItem from '@/components/CompanyItem.vue'

export default {
    name: 'CompaniesList',
    components: {
        CompanyItem,
    },
    computed: {
        ...mapGetters(['getFilterCompanyList']),
    },
}
</script>

<style lang="scss" scoped>
.container {
    max-width: 500px;
    padding: 10px;
    border: 1px solid black;
}
</style>
