<template>
    <assigment-list />
    <assigment-creater />
</template>

<script>
import AssigmentList from '@/components/AssigmentList.vue'
import AssigmentCreater from '@/components/AssigmentCreater.vue'
export default {
    name: 'AssigmentsView',
    components: {
        AssigmentList,
        AssigmentCreater,
    },
}
</script>

<style lang="scss" scoped></style>
