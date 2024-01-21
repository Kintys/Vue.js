<template>
    <v-window v-model="props.showWindow">
        <DescriptionProductPage>
            <template #item-window>
                <v-window-item value="one">
                    <p class="about-product__description">
                        {{ getItemsList[0].description[currentLocal] }}
                    </p>
                    <div class="about-product__colors"></div>
                </v-window-item>
            </template>
            <template #item-window-2>
                <v-window-item value="two">
                    <ul>
                        <li v-for="item in getItemsList[0].details">{{ item }}</li>
                    </ul>
                </v-window-item>
            </template>
            <template #item-window-3>
                <v-window-item value="three">
                    <div v-for="(item, key) in getItemsList[0].spect">{{ key }} : {{ item }}</div>
                </v-window-item>
            </template>
        </DescriptionProductPage>
    </v-window>
</template>

<script setup>
import { computed } from 'vue'
import DescriptionProductPage from './DescriptionProductPage.vue'
import { storeToRefs } from 'pinia'
import { useLaptopListStore } from '@/stores/laptop.js'
const { getItemsList } = storeToRefs(useLaptopListStore())

const currentLocal = computed(() => localStorage.getItem('lastLocale'))

const props = defineProps({
    showWindow: { type: String, require: true }
})
</script>

<style lang="scss" scoped></style>
