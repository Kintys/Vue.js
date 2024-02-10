<template>
    <div class="header">
        <div class="header__container">
            <router-link :to="{ name: 'home' }" class="header__logo-img">
                <img src="../../assets/icons/menu/logo.svg" class="img-logo ibg" alt="Logo" />
            </router-link>
            <nav class="header__nav navigation" :class="{ ['open-menu']: burger }">
                <router-link class="navigation__item" :to="{ name: 'home' }"> home</router-link>
                <router-link class="navigation__item" :to="{ name: 'catalog' }">catalog</router-link>
            </nav>
            <v-app-bar-nav-icon class="burger-icon" @click="burger = !burger"></v-app-bar-nav-icon>
            <div class="header__actions actions">
                <IconCard />
                <local-select />
                <user-profil v-if="getUser" :user="getUser" />
                <v-btn v-else class="button" @click="toLoginPage">Login</v-btn>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import UserProfil from './UserProfil.vue'
import IconCard from '@/master-page/header/IconCard.vue'
import LocalSelect from './LocalSelect.vue'

import { RouterLink, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'

const emit = defineEmits(['update:openMenuAction'])

const burger = ref(false)
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
        position: relative;
        display: grid;
        grid-template-columns: auto 1fr auto;
        @include adaptiveValue('padding-top', 37, 20);
        @include adaptiveValue('padding-bottom', 34, 20);
        align-items: center;
        border-bottom: toRem(1) solid gray;
    }
    &__logo-img {
        z-index: 50;
        .img-logo {
            aspect-ratio: 33.5/41;
        }
    }
    &__actions {
        z-index: 50;
        margin-left: 0.3125rem;
        display: flex;
        column-gap: toRem(10);
    }
}
.navigation {
    @include adaptiveValue('margin-left', 61, 15);
    margin: 0 0.3125rem;
    @include adaptiveValue('font-size', 14, 12);
    display: flex;
    row-gap: toRem(10);
    flex-wrap: wrap;
    @include adaptiveValue('column-gap', 5, 1);
    font-weight: 600;
    @media (max-width: $tablet) {
        position: fixed;
        flex-direction: column;
        font-size: toRem(20);
        color: white;
        top: 0;
        right: -120%;
        background: #0156ff;
        transition: all 0.3s;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        &::before {
            content: '';
            position: absolute;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 2;
            background-color: white;
            @include adaptiveValue('min-height', 170, 100);
        }
    }

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
.icon {
    display: none;
    @media (max-width: em(720)) {
        display: block;
    }
}
.open-menu {
    right: 0;
}
.burger-icon {
    @include adaptiveValue('margin-left', 30, 5);
    @media (min-width: $tablet) {
        display: none;
    }
}
</style>
