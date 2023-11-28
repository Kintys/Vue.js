<template>
    <div class="container">
        <button @click="onAdd" class="button">Додати</button>
        <div class="subjects">
            <div class="subjects__title">
                <h5>Клас</h5>
                <h5>Предмет</h5>
                <h5>Години</h5>
            </div>
            <list-item
                v-for="lesson in getLessonsList"
                :key="lesson.id"
                :list-item-obj="lesson"
                class="subjects__content"
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
    name: 'SubjectList',
    components: {
        ListItem,
    },
    computed: {
        ...mapGetters('lessons', ['getLessonsList']),
    },
    methods: {
        ...mapActions('lessons', ['deleteLessonById']),
        onDelete(lessonId) {
            this.deleteLessonById(lessonId)
        },
        onEdit(editId) {
            this.$router.push({
                name: 'subjectEd',
                params: {
                    id: editId,
                },
            })
        },
        onAdd() {
            this.$router.push({
                name: 'subjectEd',
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.container {
    padding: 20px;
    width: 700px;
}
.subjects {
    display: grid;
    grid-template-rows: repeat(2, auto);
    gap: 10px;

    // .subjects__title

    &__title {
        display: grid;
        grid-template-columns: repeat(3, 120px);
        justify-items: center;
    }

    // .subjects__content

    &__content {
        display: grid;
        grid-template-columns: repeat(4, 120px);
        justify-items: center;
    }
}
</style>
