<template>
    <div class="editor container">
        <div v-if="receivedId" class="editor__item">
            <p>Призначений вчитель:</p>
            {{ choosenObj.teacherName }} - {{ choosenObj.specialization }} - {{ choosenObj.classTitle }} -
            {{ choosenObj.hours }}
        </div>
        <div class="editor__box">
            <div class="editor__block">
                Вчителі
                <select v-model="assigmentObj.teacherId" class="editor__select">
                    <option v-for="{ id, teacherName, specialization } in getTeacherList" :key="id" :value="id">
                        {{ teacherName }} - {{ specialization }}
                    </option>
                </select>
            </div>
            <div class="editor__block">
                Предмети
                <select v-model="assigmentObj.lessonId" class="editor__select">
                    <option v-for="lesson in getLessonsList" :key="lesson.id" :value="lesson.id">
                        {{ lesson.classTitle }} - {{ lesson.subject }}
                    </option>
                </select>
            </div>
            <div class="editor__block">
                Час
                <select v-model="assigmentObj.lessonTime" class="editor__select">
                    <option value="45">45 хв</option>
                    <option value="90">90 хв</option>
                </select>
            </div>
        </div>
        <button @click="onAction" class="button">{{ getActionTitle }}</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'AddToAssigmentList',
    data() {
        return {
            assigmentObj: {},
            choosenObj: {},
            receivedId: null,
        }
    },
    computed: {
        ...mapGetters('teachers', ['getTeacherList']),
        ...mapGetters('lessons', ['getLessonsList']),
        ...mapGetters('assigment', ['getFindAssigmentElementById']),
        getActionTitle() {
            return this.receivedId ? 'Save' : 'Add'
        },
    },
    methods: {
        ...mapActions('assigment', ['addNewAssigment', 'upDateAssigmentItem']),
        onAction() {
            if (this.receivedId) this.upDateAssigmentItem(this.assigmentObj)
            else this.addNewAssigment(this.assigmentObj)
            this.$router.push({ name: 'assigment' })
        },
    },
    created() {
        this.receivedId = this.$route.params.id
        if (this.receivedId) {
            this.choosenObj = this.getFindAssigmentElementById(this.receivedId)
            this.assigmentObj.id = this.choosenObj.id
        }
    },
}
</script>

<style lang="scss" scoped>
.editor {
    width: 300px;
    padding: 10px;
    // .editor__block
    display: flex;
    flex-direction: column;
    gap: 20px;
    &__box {
        display: flex;
        gap: 20px;
    }
    &__select {
        border: 1px solid black;
        &:not(:last-child) {
            margin-bottom: 10px;
        }
    }
}
</style>
