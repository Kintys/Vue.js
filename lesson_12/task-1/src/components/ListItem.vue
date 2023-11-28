<template>
    <ul class="list-item">
        <li v-if="listItemObj.teacherName">{{ listItemObj.teacherName }}</li>
        <li v-if="listItemObj.specialization">{{ listItemObj.specialization }}</li>
        <li v-if="listItemObj.classTitle">{{ listItemObj.classTitle }}</li>
        <li v-if="listItemObj.subject">{{ listItemObj.subject }}</li>
        <li v-if="listItemObj.hours">{{ listItemObj.hours }}</li>
        <li>
            <span @click="onEdit" class="list-item__link">Edit</span>
            <span @click="onDelete" class="list-item__link">Delete</span>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'ListItem',
    props: {
        listItemObj: {
            type: Object,
            default: () => ({}),
        },
    },
    methods: {
        onEdit() {
            this.$emit('edit', this.listItemObj.id)
        },
        onDelete() {
            this.$emit('delete', this.listItemObj.id)
        },
    },
}
</script>

<style lang="scss" scoped>
.list-item {
    // .assigment-item__link
    &:not(:last-child) {
        margin-bottom: 5px;
    }
    &__link {
        cursor: pointer;
        padding: 5px;
        color: blue;
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
