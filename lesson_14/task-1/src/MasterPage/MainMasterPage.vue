<template>
    <div class="container">
        <header class="header">
            <nav>
                <router-link to="/">Головна</router-link> |
                <router-link :to="{ name: 'product' }">Товари</router-link> |
                <router-link :to="{ name: 'suppliers' }">Постачальник</router-link> |
                <router-link :to="{ name: 'contacts' }">Контакти</router-link> |
                <router-link :to="{ name: 'rules' }">Правила купівлі</router-link>
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
        <slot name="title-link"></slot>
        <slot></slot>
        <footer>
            <div class="footer-container">
                <slot name="rating" class=""> Рейтинг магазину: 42145 </slot>
                <div>
                    <slot name="status">
                        Статуc: <span :class="currentClass">{{ isOpenShop }}</span>
                    </slot>
                </div>
            </div>
        </footer>
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
        isOpenShop() {
            let currentDate = new Date().getHours()
            if (currentDate >= 22 || currentDate <= 8) {
                return 'Закрито'
            } else {
                return 'Відкрито'
            }
        },
        currentClass() {
            return this.isOpenShop === 'Закрито' ? 'closses-shop' : 'open-shop'
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
.open-shop {
    color: #42b983;
}
.closses-shop {
    color: red;
}

.footer-container {
    display: flex;
    justify-content: space-between;
}
</style>
