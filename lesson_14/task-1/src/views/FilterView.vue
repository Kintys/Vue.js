<template>
    <div class="filter">
        <label>
            Назва
            <input v-model="filterValue" type="text" />
        </label>
    </div>
</template>

<script>
export default {
    name: 'FilterView',
    data() {
        return {
            filterValue: null,
        }
    },
}
</script>

<style lang="scss" scoped></style>
