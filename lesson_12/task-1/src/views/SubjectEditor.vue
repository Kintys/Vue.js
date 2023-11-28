<template>
    <div class="editor">
        <div>
            Клас
            <select v-if="receivedId" v-model="lessonData.classId" class="editor__select">
                <option v-for="classtitle in getClassesList" :key="classtitle.id" :value="classtitle.id">
                    {{ classtitle.classesTitle }}
                </option>
            </select>
            <label v-else>
                <input v-model="lessonData.classTitle" type="text" class="editor__input" />
            </label>
        </div>
        <div>
            Предмет
            <select v-model="lessonData.subjectId" class="editor__select">
                <option v-for="subject in getSubjectList" :key="subject.id" :value="subject.id">
                    {{ subject.subject }}
                </option>
            </select>
        </div>
        <label
            >Години
            <input v-model="lessonData.hours" type="number" class="editor__input" />
        </label>
        <button @click="onAction" type="submit" class="button">{{ getActionButton }}</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'EditorList',
    data() {
        return {
            lessonData: {},
            receivedId: null,
        }
    },
    computed: {
        ...mapGetters('lessons', ['getLessonIdById']),
        ...mapGetters(['getSubjectList', 'getClassesList']),

        getActionButton() {
            return this.receivedId ? 'Save' : 'Add'
        },
    },
    methods: {
        ...mapActions('lessons', ['upDateLessonToLessonList', 'addNewLesson']),
        onAction() {
            if (this.receivedId) this.upDateLessonToLessonList(this.lessonData)
            else this.addNewLesson(this.lessonData)
            this.$router.push({ name: 'subjects' })
        },
    },
    created() {
        this.receivedId = this.$route.params.id
        if (this.receivedId) {
            this.lessonData = { ...this.getLessonIdById(this.receivedId) }
        } else this.lessonData
    },
}
</script>

<style lang="scss" scoped>
.editor {
    // .editor__input
    padding: 10px;
    display: grid;
    grid-template-columns: 200px;
    gap: 20px;
    &__input {
        &:not(:last-child) {
            margin-bottom: 5px;
        }
        padding: 5px;
        outline: 1px solid black;
    }

    // .editor__select

    &__select {
        border: 1px solid black;
    }
}
.button {
}
</style>
