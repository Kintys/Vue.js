<template>
    <v-menu class="user-profil" rounded>
        <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props">
                <v-avatar v-if="user.photoURL" :image="user.photoURL" size="large"> </v-avatar>
                <v-avatar v-else color="green" size="large">
                    <span class="text-h5">{{ firstUserLatter }}</span>
                </v-avatar>
            </v-btn>
        </template>
        <v-card>
            <v-card-text>
                <div class="mx-auto text-center">
                    <v-avatar :image="user.photoURL"> </v-avatar>
                    <h3>{{ user.displayName }}</h3>
                    <p class="text-caption mt-1">
                        {{ user.email }}
                    </p>
                    <v-divider class="my-3"></v-divider>
                    <div class="user-menu">
                        <v-btn class="button button--small" @click="logOutUser" rounded variant="text"> Logout </v-btn>
                    </div>
                </div>
            </v-card-text>
        </v-card>
    </v-menu>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
const { logOut } = useAuthStore()
defineProps({
    user: { type: Object }
})

import { useRouter } from 'vue-router'
const router = useRouter()
// const userName = user.email[0] ?? ''
// console.log(userName)
// const firstUserLatter = computed(() => {
//     let userName = user.email[0]
//     return userName.toUpperCase()
// })

function logOutUser() {
    logOut
    router.go()
}
</script>

<style lang="scss" scoped>
.user-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
