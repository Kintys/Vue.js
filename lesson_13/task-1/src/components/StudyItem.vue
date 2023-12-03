<template>
    <li>{{ getSubjectTitle }} - {{ getTeacherName }}</li>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'StudyItem',
    props: {
        lessonIdPair: {
            type: String,
            required: true,
        },
    },
    computed: {
        ...mapGetters('subjects', ['getSubjectItemById']),
        ...mapGetters('teachers', ['getTeachersItemById']),
        getSubjectTitle() {
            const subjectId = this.lessonIdPair.split('(-)')[0]
            return this.getSubjectItemById(subjectId)?.title
        },
        getTeacherName() {
            const teacherId = this.lessonIdPair.split('(-)')[1]
            return this.getTeachersItemById(teacherId)?.name
        },
    },
}
</script>

<style lang="scss" scoped></style>
