<template>
    <main-master-page>
        <section class="login">
            <div class="login__container">
                <div class="login__page-title">
                    <h1>{{ $t('loginPage.pageTitle') }}</h1>
                </div>
                <div class="login__card">
                    <login-card :login-card-data="loginTitleObj"> </login-card>
                    <login-card :login-card-data="registerTitleObj">
                        <template #card-block>
                            <div class="benefit">
                                <h4 class="benefit__title">
                                    {{ $t('benefits.title') }}
                                </h4>
                            </div>
                            <ul class="benefit__list">
                                <li v-for="item in benefitListItem" :key="item" class="benefit__item">
                                    {{ $t(`benefits.list.${item}`) }}
                                </li>
                            </ul>
                        </template>
                        <template #card-actions>
                            <v-btn @click="goToCreate" class="button">{{ $t('customerBox.button') }}</v-btn>
                        </template>
                    </login-card>
                </div>
            </div>
        </section>
    </main-master-page>
</template>
<script setup>
import LoginCard from '@/views/LoginPage/LoginCard.vue'
import MainMasterPage from '@/master-page/MainMasterPage.vue'
import { useRouter } from 'vue-router'
import { reactive } from 'vue'

const router = useRouter()

const loginTitleObj = reactive({
    title: 'loginBox.title',
    subTitle: 'loginBox.subTitle'
})
const registerTitleObj = reactive({
    title: 'customerBox.title'
})

const benefitListItem = reactive(['item1', 'item2', 'item3'])
function goToCreate() {
    router.push({
        name: 'create'
    })
}
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.login {
    &__container {
    }
    &__card {
        display: flex;
        justify-content: center;
        column-gap: toRem(30);
    }
    // .login__page-title

    &__page-title {
        font-size: toRem(32);
        font-weight: 600;
        &:not(:last-child) {
            margin-bottom: toRem(21);
        }
    }

    // .login__block

    &__block {
        display: flex;
        justify-content: center;
        @include adaptiveValue('column-gap', 34, 10);
    }
}

.benefit {
    // .benefit__title

    &__title {
        &:not(:last-child) {
            margin-bottom: toRem(25);
        }
    }

    // .benefit__list

    &__list {
        display: grid;
        gap: toRem(10);
    }

    // .benefit__item

    &__item {
        display: flex;
        align-items: center;
        &::before {
            margin-right: toRem(8);
            content: '•';
        }
    }
}
</style>
