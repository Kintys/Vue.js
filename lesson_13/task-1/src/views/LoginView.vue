<template>
    <main-master-page>
        <div v-if="loading" class="loading">
            <img src="../assets/loading.gif" />
        </div>
        <div class="container">
            <div class="login">
                <label class="login__lable">
                    Логін
                    <input v-model="user.loginName" type="text" />
                </label>
                <label lass="login__lable">
                    Пароль
                    <input v-model="user.password" type="password" />
                </label>
                <button @click="onLogin" :disabled="onDisabled" class="login__btn">Увійти</button>
            </div>
        </div>
    </main-master-page>
</template>

<script>
import MainMasterPage from '../components/MainMasterPage.vue'
export default {
    name: 'LoginView',
    components: {
        MainMasterPage,
    },
    data() {
        return {
            user: {},
            loading: false,
        }
    },
    computed: {
        onDisabled() {
            return !this.user.loginName && this.user.password
        },
    },
    methods: {
        onLogin() {
            this.loading = true
            setTimeout(() => {
                this.loading = false
                localStorage.setItem('userLogin', JSON.stringify({ loginName: this.user.loginName, token: 'token' }))
                this.$router.push({
                    name: 'home',
                })
            }, 2000)
        },
    },
}
</script>

<style lang="scss" scoped>
.container {
    max-width: 1310px;
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 100px;
}
.login {
    padding: 15px;
    border: 1px solid black;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
}
.loading {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(128, 128, 128, 0.201);
    z-index: 1;
    img {
        width: 100px;
        height: 100px;
    }
}
</style>
