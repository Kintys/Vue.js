<template>
    <div class="container">
        <header class="header">
            <nav>
                <router-link to="/">Головна</router-link> | <router-link :to="{ name: 'drivers' }">Водії</router-link> |
                <router-link :to="{ name: 'bus' }">Автобуси</router-link> |
                <router-link :to="{ name: 'assigment' }">Призначення</router-link>
            </nav>
            <div class="login">
                <div v-if="authParams" class="login__exit">
                    <font-awesome-icon icon="user" />
                    {{ userName }}
                    <div><a @click.prevent="onLogout" class="login__title">Вийти</a></div>
                </div>
                <div v-else class="login__entrance">
                    <font-awesome-icon icon="door-open" class="global-icon" />
                    <router-link :to="{ name: 'login' }">Увійти</router-link>
                </div>
            </div>
        </header>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'MainMasterPage',
    computed: {
        authParams() {
            const authParams = localStorage.getItem('user')
            return authParams ? JSON.parse(authParams) : null
        },
        userName() {
            return this.authParams?.login
        },
    },
    methods: {
        onLogout() {
            localStorage.removeItem('user')
            this.$router.push({
                name: 'login',
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.container {
    padding: 0 35px;
    max-width: 1310px;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.login {
    // .login__exit

    &__exit {
        display: flex;
        gap: 10px;
    }

    // .login__entrance

    &__entrance {
    }
    &__title {
        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
}
</style>
