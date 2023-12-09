<template>
    <div class="container login">
        <div v-if="loading" class="loading">
            <div class="loading__image"><img src="../assets/loading.gif" alt="#" /></div>
        </div>
        <header class="login__header"><router-link :to="{ name: 'home' }">Головна</router-link></header>
        <div class="login__box">
            <label class="login__label">
                Логін
                <input v-model="user.login" type="text" />
            </label>
            <label class="login__label">
                Пароль
                <input v-model="user.password" type="password" />
            </label>
            <button :disabled="!onDisable" @click="onLogin">
                <font-awesome-icon icon="door-open" class="global-icon" />Увійти
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            user: {},
            loading: false,
        }
    },
    computed: {
        onDisable() {
            return this.user.login && this.user.password
        },
    },
    methods: {
        onLogin() {
            this.loading = true
            setTimeout(() => {
                this.loading = false
                localStorage.setItem(
                    'user',
                    JSON.stringify({
                        login: this.user.login,
                        token: `${new Date().getTime()}`,
                    })
                )
                this.$router.push({
                    name: 'home',
                })
            }, 2000)
        },
    },
}
</script>

<style lang="scss" scoped>
.loading {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.304);
    width: 100%;
    height: 100%;
    &__image {
        position: relative;
        width: 100%;
        height: 100%;
        img {
            position: absolute;
            top: 30%;
            left: 45%;
        }
    }
}
.container {
}
.login {
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;

    // .login__header

    &__header {
        &:not(:last-child) {
            margin-bottom: 50px;
        }
    }

    // .login__box

    &__box {
        display: flex;
        flex-direction: column;
        width: 300px;
        padding: 10px;
        gap: 15px;
        align-items: flex-start;
    }
    &__label {
    }
}
</style>
