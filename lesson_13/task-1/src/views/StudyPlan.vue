<template>
    <ol class="study-list">
        <study-item v-for="studyId in getStudyIdList" :key="studyId" :lesson-id-pair="studyId" />
    </ol>
</template>

<script>
import StudyItem from '@/components/StudyItem.vue'
export default {
    name: 'StudyPlan',
    components: {
        StudyItem,
    },
    computed: {
        getStudyIdList() {
            return this.$route.params.studyId
        },
    },
}
</script>

<style lang="scss" scoped>
.study-list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
</style>
