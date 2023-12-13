<template>
    <div class="item">
        <div>{{ titleItem }}</div>
        <div>{{ dataObj.title }}</div>
        <div>{{ subtitleItem }}</div>
        <div>{{ dataObj.property }}</div>
        <span>
            <v-btn @click="onEdit" variant="text"> <font-awesome-icon icon="pen-to-square" /></v-btn>
            <v-btn @click="onDelete" variant="text"> <font-awesome-icon icon="trash" /> </v-btn>
        </span>
    </div>
</template>
<script>
export default {
    name: 'DataItem',
    props: {
        dataObj: {
            type: Object,
            defauld: () => ({}),
        },
        titleItem: {
            type: String,
            require: true,
        },
        subtitleItem: {
            type: String,
            require: true,
        },
    },
    methods: {
        onDelete() {
            this.$emit('delete', this.dataObj.id)
        },
        onEdit() {
            this.$emit('edit', this.dataObj.id)
        },
    },
}
</script>

<style lang="scss" scoped>
.item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
}
</style>
