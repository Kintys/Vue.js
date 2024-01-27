<template>
    <div class="header">
        <div class="header__container">
            <div class="header__logo-img">
                <img src="../../assets/icons/menu/logo.svg" class="img-logo ibg" alt="Logo" />
            </div>
            <nav class="header__nav nav">
                <router-link class="nav__item" :to="{ name: 'home' }"> home</router-link>
                <router-link class="nav__item" :to="{ name: 'editor' }"> editor</router-link>
                <router-link class="nav__item" :to="{ name: 'catalog' }"> catalog</router-link>
                <router-link class="nav__item" :to="{ name: 'cart' }"> cart</router-link>
                <!-- <router-link class="nav__item" :to="{ name: 'product' }"> product</router-link> -->
            </nav>
            <div class="header__actions actions">
                <local-select />
                <user-profil v-if="getUser" :user="getUser" />
                <v-btn v-else class="button" @click="toLoginPage">Login</v-btn>
            </div>
        </div>
    </div>
</template>

<script setup>
import UserProfil from './UserProfil.vue'
import { RouterLink, useRouter } from 'vue-router'
import LocalSelect from './LocalSelect.vue'
import { useAuthStore } from '@/stores/auth.js'
const router = useRouter()
const { getUser } = useAuthStore()

function toLoginPage() {
    router.push({
        name: 'login'
    })
}
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';

$blueColor: #0156ff;
.header {
    background: #ffff;
    z-index: 50;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%; // .header__container

    &__container {
        display: grid;
        grid-template-columns: auto 1fr auto;
        padding-top: 2.3rem;
        padding-bottom: 2.3rem;
        align-items: center;
        border-bottom: 1px solid gray;
    }
    &__logo-img {
        .img-logo {
            aspect-ratio: 33.5/41;
        }
    }
    &__actions {
        margin-left: 0.3125rem;
        display: flex;
        column-gap: toRem(10);
    }
}
.nav {
    @include adaptiveValue('margin-left', 61, 15);
    margin: 0 0.3125rem;
    font-size: toRem(14);
    display: flex;
    row-gap: 10px;
    flex-wrap: wrap;
    @include adaptiveValue('column-gap', 5, 1);
    font-weight: 600;

    &__item {
        @include adaptiveValue('padding-right', 26, 1);
        @include adaptiveValue('padding-left', 26, 1);
        @include adaptiveValue('padding-top', 8, 4);
        @include adaptiveValue('padding-bottom', 8, 4);
        @media (any-hover: hover) {
            &:hover {
                color: $blueColor;
                border-radius: 50px;
                outline: 2px solid $blueColor;
            }
        }
    }
}
.button {
    padding: toRem(10) toRem(15);
}
</style>
