<template>
    <MainMasterPage>
        <section class="cart-page">
            <div class="cart-page__container">
                <ShoppingCardManager />
                <SummaryAsideBar />
            </div>
        </section>
    </MainMasterPage>
</template>

<script setup>
import MainMasterPage from '@/master-page/MainMasterPage.vue'
import SummaryAsideBar from './SummaryAsideBar.vue'
import ShoppingCardManager from './ShoppingCardManager.vue'
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.cart-page {
    // .cart-page__container

    &__container {
        display: grid;
        grid-template-columns: 1fr auto;
        @media (max-width: em(1100)) {
            grid-template-columns: auto;
            row-gap: toRem(10);
        }

        @include adaptiveValue('column-gap', 35, 20);
        &:first-child {
            align-items: start;
        }
    }
}
</style>
