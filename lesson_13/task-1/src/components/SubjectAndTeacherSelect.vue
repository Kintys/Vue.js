<template>
    <div class="teacher-container">
        <label class="teacher-label">
            {{ getSubjectName }}
            <select v-model="selectTeacherId" @change="onChange">
                <option v-for="teacher in getTeachersList" :key="teacher.id" :value="teacher.id">
                    {{ teacher.name }}
                </option>
            </select>
        </label>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'SubjectAndTeacher',
    props: {
        subjectId: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            selectTeacherId: null,
        }
    },
    computed: {
        ...mapGetters('subjects', ['getSubjectItemById']),
        ...mapGetters('teachers', ['getTeacherBySubjectId']),
        getSubjectName() {
            return this.getSubjectItemById(this.subjectId).title
        },
        getTeachersList() {
            return this.getTeacherBySubjectId(this.subjectId)
        },
    },
    methods: {
        onChange() {
            this.$emit('selected-teacher', this.selectTeacherId)
        },
    },
}
</script>

<style lang="scss" scoped>
.teacher-container {
    &:not(:last-child) {
        margin-bottom: 5px;
    }
}
</style>
