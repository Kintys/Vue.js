<template>
    <MainMasterPage>
        <div class="create">
            <div class="create__container">
                <LoginCard :login-card-data="createTitleObj" v-model:newEmail="newEmail" v-model:newPass="newPassword">
                    <template #card-actions>
                        <div>
                            <v-btn @click="onCreateNewAcc(newEmail, newPassword)" class="button">{{
                                $t('createAccPage.button')
                            }}</v-btn>
                        </div>
                    </template>
                </LoginCard>
            </div>
        </div>
    </MainMasterPage>
</template>

<script setup>
import { reactive, ref } from 'vue'
import MainMasterPage from '@/master-page/MainMasterPage.vue'
import LoginCard from './LoginCard.vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
const router = useRouter()
const newEmail = ref(null)
const newPassword = ref(null)

const { signUpWithWithEmailAndPassword } = useAuthStore()

function onCreateNewAcc(email, password) {
    signUpWithWithEmailAndPassword(email, password).then(
        router.push({
            name: 'home'
        })
    )
}

const createTitleObj = reactive({
    title: 'createAccPage.title'
})
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.create {
    // .create__container

    &__container {
        display: flex;
        justify-content: center;
    }
}
</style>
