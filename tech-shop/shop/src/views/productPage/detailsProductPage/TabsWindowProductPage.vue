<template>
    <v-window v-model="props.showWindow">
        <DescriptionProductPage>
            <template #item-window>
                <v-window-item value="one">
                    <p class="about-product__description">
                        {{ getCurrentItem?.description[currentLocale] }}
                    </p>
                </v-window-item>
            </template>
            <template #item-window-2>
                <v-window-item value="two">
                    <ul>
                        <li v-for="item in getCurrentItem?.details">{{ item }}</li>
                    </ul>
                </v-window-item>
            </template>
            <template #item-window-3>
                <v-window-item value="three">
                    <div v-for="(item, key) in getCurrentItem?.spect">{{ key }} : {{ item }}</div>
                </v-window-item>
            </template>
        </DescriptionProductPage>
    </v-window>
</template>

<script setup>
import { useLocales } from '@/modulHelpers/i18n.js'
import DescriptionProductPage from './DescriptionProductPage.vue'
import { useCatalogStore } from '@/stores/catalog'
import { storeToRefs } from 'pinia'
const { getCurrentItem } = storeToRefs(useCatalogStore())

const { currentLocale } = useLocales()
const props = defineProps({
    showWindow: { type: String, require: true }
})
</script>

<style lang="scss" scoped></style>
