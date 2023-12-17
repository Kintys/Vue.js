<template>
    <div class="container">
        <header class="header">
            <nav>
                <router-link v-for="menuItem in menuItemList" :key="menuItem.to" :to="menuItem.to"
                    ><span class="menu-items">{{ $t(`menu.${menuItem.titleLabel}`) }}</span>
                </router-link>
            </nav>
            <div @click="onShopping" class="shopping-icon">
                <font-awesome-icon icon="cart-shopping" /><span class="icon-number">{{ getCardList.length }} </span>
            </div>
            <div class="action">
                <div class="lang">
                    <flag class="flag" :iso="currentLang" />
                    <v-select v-model="currentLang" :items="languageObj" item-title="name" class="select"> </v-select>
                </div>
                <div class="auth">
                    <div v-if="getUser" class="user-info">
                        <div class="user-icon">
                            <div class="user-img"><img :src="getUser.photoURL" alt="photo" /></div>
                            <div class="user-text">
                                {{ getUser.email }}
                            </div>
                        </div>

                        <v-btn @click="onLogout" size="small">
                            <span class="icon-user"><font-awesome-icon icon="door-open" /></span
                            >{{ $t('actionTitles.logout') }}</v-btn
                        >
                    </div>
                    <div v-else>
                        <v-btn @click="onLogin" size="small">
                            <span class="icon-user"><font-awesome-icon icon="user" /></span
                            >{{ $t('actionTitles.login') }}</v-btn
                        >
                    </div>
                </div>
            </div>
        </header>
        <slot></slot>
        <error-message v-if="errorMassege" :error-value="errorMassege" />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ErrorMessage from '@/components/ErrorMessage.vue'
export default {
    name: 'MasterPage',
    components: {
        ErrorMessage,
    },
    data() {
        return {
            errorMassege: null,
            currentLang: null,
            languageObj: [
                {
                    name: `UA`,
                },
                {
                    name: 'GB',
                },
            ],
            menuItemList: [
                {
                    to: {
                        name: 'home',
                    },
                    titleLabel: 'home',
                },
                {
                    to: {
                        name: 'product',
                    },
                    titleLabel: 'product',
                },
            ],
        }
    },
    computed: {
        ...mapGetters('auth', ['getUser']),
        ...mapGetters('card', ['getCardList']),
    },
    created() {
        this.$i18n.locale = localStorage.getItem('lastLocale') ?? process.env.VUE_APP_I18N_LOCALE
        this.currentLang = localStorage.getItem('lastLocale') ?? process.env.VUE_APP_I18N_LOCALE
        const self = this
        window.addEventListener('storage', function () {
            if (self.$i18n.locale !== this.localStorage.getItem('lastLocale')) {
                self.$i18n.locale = this.localStorage.getItem('lastLocale')
                self.$router.go()
            }
        })
    },
    watch: {
        currentLang: {
            handler(newValue) {
                this.changeLang(newValue)
            },
            deep: true,
        },
    },
    methods: {
        ...mapActions('auth', ['loginWithGoogle', 'logout']),
        async onLogin() {
            try {
                await this.loginWithGoogle()
                this.$router.push({
                    name: 'home',
                })
            } catch (error) {
                this.errorMassege = error
            }
        },
        onLogout() {
            this.logout()
            this.$router.push({
                name:"home"
            })
        },
        changeLang(lang) {
            this.$i18n.locale = lang
            localStorage.setItem('lastLocale', lang)
        },
        onShopping() {
            this.$router.push({
                name: 'card',
            })
        },
    },
}
</script>

<style lang="scss" scoped>
.container {
    padding: 0 15px;
}
.header {
    padding: 10px 0;
    border-bottom: 1px solid rgb(7, 194, 241);
    display: flex;
    justify-content: space-between;
}
.action {
    display: flex;
    align-items: center;
}
.lang {
    display: flex;
    gap: 30px;
    margin-right: 20px;
    align-items: center;
}
.flag {
    font-size: 38px;
}
.select {
    display: flex;
}
.icon-user {
    margin-right: 5px;
}
.user-info {
    display: flex;
    align-items: center;
    gap: 10px;
}
.user-icon {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3px;
}
.user-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    img {
        max-width: 100%;
    }
}
.menu-items {
    margin-right: 10px;
}
.shopping-icon {
    font-size: 25px;
    display: flex;
    gap: 5px;
    align-items: center;
}
.icon-number {
    color: rgb(30, 48, 80);
    font-weight: 800;
}
</style>
