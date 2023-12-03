<template>
    <main-master-page>
        <h1>Уроки</h1>
        <router-view />
    </main-master-page>
</template>

<script>
import MainMasterPage from '@/components/MainMasterPage.vue'

export default {
    name: 'LessonsView',
    components: { MainMasterPage },
}
</script>

<style lang="scss" scoped></style>
