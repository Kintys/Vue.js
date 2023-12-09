<template>
    <main-master-page>
        <div class="auth">
            <font-awesome-icon icon="ban" class="icon-ban" />
            <h1>АВТОРИЗУЙТЕСЯ для доступу на наш сайт</h1>
        </div>
    </main-master-page>
</template>

<script>
import MainMasterPage from '../MasterPage/MainMasterPage.vue'
export default {
    name: 'AuthPage',
    components: {
        MainMasterPage,
    },
}
</script>

<style lang="scss" scoped>
.icon-ban {
    font-size: 46px;
}
</style>
