<template>
    <master-page>
        <h1 class="title">{{ $t('home.welcome') }}</h1>
    </master-page>
</template>

<script>
import MasterPage from '@/master/MasterPage.vue'
export default {
    name: 'HomeView',
    components: { MasterPage },
}
</script>
<style lang="scss" scoped>
.title {
    font-size: 36px;
    text-align: center;
    padding-top: 80px;
}
</style>
