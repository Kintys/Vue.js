<template>
    <div class="editor">
        <label>
            ПІБ
            <input v-model="teacherData.teacherName" type="text" class="editor__input" />
        </label>
        <select v-model="teacherData.subjectId" class="editor__select">
            <option v-for="subject in getSubjectList" :key="subject.id" :value="subject.id">
                {{ subject.subject }}
            </option>
        </select>
        <button @click="onAction" type="submit" class="button">{{ getActionButton }}</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'EditorList',
    data() {
        return {
            teacherData: {},
            receivedParams: null,
        }
    },
    computed: {
        ...mapGetters('teachers', ['getTeacherNameById']),
        ...mapGetters(['getSubjectList']),
        getActionButton() {
            return this.$route.params.id ? 'Save' : 'Add'
        },
    },
    methods: {
        ...mapActions('teachers', ['upDateTeacherToTeacherList', 'addTeacherToTeacherList']),
        onAction() {
            if (this.receivedParams.id) this.upDateTeacherToTeacherList(this.teacherData)
            else this.addTeacherToTeacherList(this.teacherData)
            this.$router.push({ name: 'teachers' })
        },
    },
    created() {
        this.receivedParams = {
            id: this.$route.params.id,
        }

        if (this.receivedParams.id) {
            this.teacherData = { ...this.getTeacherNameById(this.receivedParams.id) }
        } else this.teacherData
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
