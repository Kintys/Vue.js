<template>
    <div class="company-container company">
        <div class="company__content">
            <div class="company__title">{{ companyItem.company }}</div>
            <div class="company__age">{{ companyItem.rate }}</div>
            <div class="company__year">{{ companyItem.year }}</div>
            <div class="company__own-name">{{ companyItem.owner }}</div>
        </div>
        <div class="company__btn">
            <button @click="onDelete(companyItem.id)" type="submit">Delete</button>
            <button @click="onEdit(companyItem.id)" type="submit">Edit</button>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'CompanyItem',
    props: {
        companyItem: {
            type: Object,
            default: () => ({}),
        },
    },
    methods: {
        ...mapActions(['deleteCompany']),
        onDelete(id) {
            this.deleteCompany(id)
        },
        onEdit(companyId) {
            this.$router.push({
                name: 'editor',
                params: {
                    id: companyId,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.company-container {
    &:not(:last-child) {
        margin-bottom: 2px;
    }
}
.company {
    padding: 3px;
    display: flex;
    // .company__title
    width: 500px;
    &__content {
        display: flex;
        flex-grow: 1;
    }
    &__title {
        width: 145px;
    }

    // .company__age

    &__age {
        width: 30px;
    }

    // .company__year

    &__year {
        width: 50px;
    }

    // .company__own-name

    &__own-name {
    }

    // .company__btn

    &__btn {
        display: flex;
        gap: 5px;
    }
}
</style>
