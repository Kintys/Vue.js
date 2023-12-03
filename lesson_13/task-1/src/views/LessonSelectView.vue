<template>
    <div class="lesson-container">
        <div class="lesson-box">
            <label v-for="subject in getSubjectList" :key="subject.id">
                {{ subject.title }}
                <input v-model="subjectsIdList" type="checkbox" :value="subject.id" />
            </label>
        </div>
        <button :disabled="!subjectsIdList.length" @click="selectedLessons" type="submit" class="button">
            Вибрати вчителя
        </button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'LessonSelectView',
    data() {
        return {
            subjectsIdList: [],
        }
    },
    computed: {
        ...mapGetters('subjects', ['getSubjectList']),
    },
    methods: {
        selectedLessons() {
            this.$router.push({
                name: 'teachers-select',
                params: {
                    subjectId: this.subjectsIdList,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.lesson-container {
    position: absolute;
    top: 30%;
    left: 43%;
    padding: 10px;
    gap: 10px;
    width: 200px;
    display: grid;
    justify-items: center;
    border: 1px solid black;
    .lesson-box {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
}
</style>
