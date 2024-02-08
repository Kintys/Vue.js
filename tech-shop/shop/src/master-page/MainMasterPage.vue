<template>
    <div class="wrapper">
        <HeaderContainer />
        <main class="main">
            <LoadingPage v-if="isLoading" />
            <ErrorPage v-else-if="hasError" />

            <template v-if="!hasError">
                <slot> </slot>
            </template>
        </main>
        <FooterInfo />
        <FooterSection />
        <div
            class="show-bar"
            :class="{
                ['open-menu']: menuAction
            }"
        ></div>
    </div>
</template>

<script setup>
import LoadingPage from '@/components/LoadingPage.vue'
import ErrorPage from '@/components/ErrorPage.vue'
import FooterInfo from './footer/FooterInfo.vue'
import HeaderContainer from './header/HeaderContainer.vue'
import FooterSection from './footer/FooterSection.vue'

import { useGeneralStore } from '@/stores/general'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
const menuAction = ref(false)

const generalStore = useGeneralStore()

const { isLoading, hasError } = storeToRefs(generalStore)
</script>

<style lang="scss">
.wrapper {
    position: relative;
}

@import '@/assets/adaptive.scss';
.main {
    @include adaptiveValue('padding-top', 174, 100);
}
</style>
