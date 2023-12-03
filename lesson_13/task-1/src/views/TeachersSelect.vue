<template>
    <div class="teachers-container">
        <subject-and-teacher-select
            v-for="subjectId in subjectIdList"
            :key="subjectId"
            :subject-id="subjectId"
            @selected-teacher="onSelectedLesson(subjectId, $event)"
        />
        <button @click="toStudyList" type="submit">Показати уроки</button>
    </div>
</template>

<script>
import SubjectAndTeacherSelect from '@/components/SubjectAndTeacherSelect.vue'
export default {
    name: 'TeachersSelect',
    components: { SubjectAndTeacherSelect },
    data() {
        return {
            lesson: {},
        }
    },
    computed: {
        subjectIdList() {
            return this.$route.params.subjectId
        },
    },
    methods: {
        onSelectedLesson(subjectId, teacherId) {
            this.lesson[subjectId] = teacherId
            console.log(this.lesson)
        },
        toStudyList() {
            let lessonsIdsPairs = []
            for (const subjectId in this.lesson) {
                lessonsIdsPairs.push(`${subjectId}(-)${this.lesson[subjectId]}`)
            }

            this.$router.push({
                name: 'study-list',
                params: {
                    studyId: lessonsIdsPairs,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.teachers-container {
    display: flex;
    width: 300px;
    flex-direction: column;
    justify-content: center;
    flex-wrap: nowrap;
    padding: 10px;
    border: 1px solid black;
}
</style>
