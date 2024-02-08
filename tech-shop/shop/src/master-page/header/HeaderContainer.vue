<template>
    <div class="header">
        <div class="header__container">
            <div class="header__logo-img">
                <img src="../../assets/icons/menu/logo.svg" class="img-logo ibg" alt="Logo" />
            </div>
            <nav class="header__nav navigation">
                <router-link class="navigation__item" :to="{ name: 'home' }"> home</router-link>
                <router-link class="navigation__item" :to="{ name: 'catalog' }">catalog</router-link>
            </nav>
            <div class="header__actions actions">
                <IconCard />
                <local-select />
                <user-profil v-if="getUser" :user="getUser" />
                <v-btn v-else class="button" @click="toLoginPage">Login</v-btn>
            </div>
            <Slide class="icon" :right="true">
                <nav class="header__nav navigation">
                    <router-link class="navigation__item" :to="{ name: 'home' }"> home</router-link>
                    <router-link class="navigation__item" :to="{ name: 'catalog' }">catalog</router-link>
                </nav>
            </Slide>
        </div>
    </div>
</template>

<script setup>
import { Slide } from 'vue3-burger-menu'
import { ref, watch } from 'vue'
import UserProfil from './UserProfil.vue'
import IconCard from '@/master-page/header/IconCard.vue'
import LocalSelect from './LocalSelect.vue'

import { RouterLink, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'

const emit = defineEmits(['update:openMenuAction'])

const drawer = ref(false)
const router = useRouter()
const { getUser } = useAuthStore()

// watch(drawer, (newVal) => {
//     if (newVal) document.body.style.overflow = 'hidden'
// })

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
        position: absolute;
        top: 0;
        opacity: 0;
        visibility: hidden;
        right: -100%;
        background: #0156ff4d;
        transition: all 0.3s;
        width: 100%;
        height: 100%;
        z-index: 10;
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
// .show-bar {
//     position: absolute;
//     top: 0;
//     left: -100%;
//     width: %;
//     height: 100%;
//     background: white;
//     transition: all 0.5s;
//     z-index: 100;
// }
.open-menu {
    right: 0;
    opacity: 1;
    visibility: visible;
}
</style>
