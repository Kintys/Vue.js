<template>
    <div class="container">
        <div class="nav">
            <nav>
                <router-link :to="{ name: 'home' }">Головна</router-link> |
                <router-link :to="{ name: 'lesson-select' }">Уроки</router-link> |
                <router-link :to="{ name: 'teachers' }">Вчителі</router-link>
            </nav>
            <div class="auth">
                <div v-if="isAuthParams">
                    <font-awesome-icon :icon="['fas', 'user']" class="login-icon" />
                    <span>{{ userName }}</span> /
                    <a class="link-a" @click.prevent="cancelLogin">Вийти</a>
                </div>
                <div v-else>
                    <router-link :to="{ name: 'login' }">
                        <font-awesome-icon :icon="['fasr', 'right-to-bracket']" class="login-icon" />Увійти</router-link
                    >
                </div>
            </div>
        </div>
    </div>
    <slot></slot>
</template>

<script>
export default {
    name: 'MainMasterPage',
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

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.link-a {
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
}
</style>
