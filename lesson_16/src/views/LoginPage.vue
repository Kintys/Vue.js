<template>
    <v-sheet class="bg-deep-purple pa-10" rounded>
        <v-card class="mx-auto px-6 py-8" max-width="344">
            <v-form @submit.prevent="onLogin">
                <v-text-field
                    v-model="user.login"
                    :readonly="loading"
                    class="mb-2"
                    clearable
                    label="Login"
                ></v-text-field>
                <v-text-field
                    v-model="user.password"
                    :readonly="loading"
                    clearable
                    label="Password"
                    placeholder="Enter your password"
                ></v-text-field>
                <br />
                <v-btn
                    :disabled="!onDisable"
                    :loading="loading"
                    block
                    color="success"
                    size="large"
                    type="submit"
                    variant="elevated"
                >
                    Sign In
                </v-btn>
            </v-form>
        </v-card>
    </v-sheet>
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

<style lang="scss" scoped></style>
