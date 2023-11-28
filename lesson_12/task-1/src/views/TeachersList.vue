<template>
    <div class="container">
        <button @click="onAdd" class="button">Додати</button>
        <div class="teachers">
            <div class="teachers__title">
                <h5>ПІБ</h5>
                <h5>Спеціалізація</h5>
            </div>
            <list-item
                v-for="teacher in getTeacherList"
                :key="teacher.id"
                :list-item-obj="teacher"
                class="teachers__content"
                @delete="onDelete"
                @edit="onEdit"
            />
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ListItem from '@/components/ListItem.vue'
export default {
    name: 'TeachersList',
    components: {
        ListItem,
    },
    computed: {
        ...mapGetters('teachers', ['getTeacherList']),
    },
    methods: {
        ...mapActions('teachers', ['deleteTeacherById']),
        onDelete(teacherid) {
            this.deleteTeacherById(teacherid)
        },
        onEdit(editId) {
            this.$router.push({
                name: 'teacherEd',
                params: {
                    id: editId,
                },
            })
        },
        onAdd() {
            this.$router.push({
                name: 'teacherEd',
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.container {
    padding: 20px;
}

.teachers {
    gap: 10px;
    display: grid;
    grid-template-rows: repeat(2, auto);
    // .teachers__title

    &__title {
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(2, 120px);
    }

    // .teachers__content

    &__content {
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(3, 120px);
    }
}
</style>
