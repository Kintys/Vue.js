<template>
    <master-page>
        <div class="auth">
            <font-awesome-icon icon="ban" class="icon-ban" />
            <h1>{{ $t('message.notAuth') }}</h1>
        </div>
    </master-page>
</template>

<script>
import MasterPage from '@/master/MasterPage.vue'
export default {
    name: 'AuthPage',
    components: {
        MasterPage,
    },
}
</script>

<style lang="scss" scoped>
.auth {
    text-align: center;
}
.icon-ban {
    font-size: 46px;
}
</style>
