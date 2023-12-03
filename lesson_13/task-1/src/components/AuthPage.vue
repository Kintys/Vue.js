<template>
    <div class="container">
        <font-awesome-icon :icon="['fad', 'shield-halved']" class="auth-icon" />
        <h1>Авторизуйтесь для доступу до сервісів</h1>
        <div>
            <router-link :to="{ name: 'login' }">
                <font-awesome-icon :icon="['fasr', 'right-to-bracket']" class="login-icon" />Увійти</router-link
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'AuthPage',
    computed: {
        isAuthParams() {
            const authParams = localStorage.getItem('userLogin')
            return authParams ? JSON.parse(authParams) : null
        },
        userName() {
            return this.isAuthParams?.loginName
        },
    },
    methods: {
        cancelLogin() {
            localStorage.removeItem('userLogin')
            this.$router.push({
                name: 'login',
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.container {
    max-width: 1310px;
    padding-left: 15px;
    padding-right: 15px;
}
.auth-icon {
    font-size: 36px;
}
</style>
