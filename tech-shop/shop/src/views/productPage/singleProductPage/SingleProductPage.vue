<template>
    <div>
        <v-tabs v-model="tab" bg-color="transparent" class="px-5" slider-color="blue">
            <v-tab value="one">Item One</v-tab>
            <v-tab value="two">Item Two</v-tab>
            <v-tab value="three">Item Three</v-tab>
        </v-tabs>

        <v-window v-model="tab">
            <v-window-item value="one"><AboutProductPage /> </v-window-item>

            <v-window-item value="two"> Two </v-window-item>

            <v-window-item value="three"> Three </v-window-item>
        </v-window>
    </div>
</template>

<script setup>
import AboutProductPage from './AboutProductPage.vue'
import { ref } from 'vue'
const tab = ref(null)
</script>

<style lang="scss" scoped></style>
