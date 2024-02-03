<template>
    <div class="page-not-found">
        <div class="page-not-found__container">
            <v-img width="40%" src="@/assets/img/404/img_404.png"></v-img>
            <h1 class="page-not-found__title">Something went wrong.</h1>
            <p class="page-not-found__subtitle">Sorry, We can’t find the page you’re looking for.</p>
            <div class="page-not-found__link">
                <v-btn class="button"> <router-link :to="{ name: 'home' }">Go Back</router-link></v-btn>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.page-not-found {
    // .page-not-found__container

    &__container {
        @include adaptiveValue('padding-top', 30, 10);
        @include adaptiveValue('padding-bottom', 100, 30);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: toRem(10);
    }

    // .page-not-found__title

    &__title {
        font-weight: 900;
    }
}
</style>
