<template>
    <v-window v-model="props.showWindow">
        <DescriptionProductPage>
            <template #item-window>
                <v-window-item value="one">
                    <p class="about-product__description">
                        {{ productDataItem.description[currentLocale] }}
                    </p>
                    <div class="about-product__colors"></div>
                </v-window-item>
            </template>
            <template #item-window-2>
                <v-window-item value="two">
                    <ul>
                        <li v-for="item in productDataItem.details">{{ item }}</li>
                    </ul>
                </v-window-item>
            </template>
            <template #item-window-3>
                <v-window-item value="three">
                    <div v-for="(item, key) in productDataItem.spect">{{ key }} : {{ item }}</div>
                </v-window-item>
            </template>
        </DescriptionProductPage>
    </v-window>
</template>

<script setup>
import { useLocales } from '@/modulHelpers/i18n.js'
const { currentLocale } = useLocales()

import DescriptionProductPage from './DescriptionProductPage.vue'

const props = defineProps({
    showWindow: { type: String, require: true },
    productDataItem: {
        type: Object,
        require: true
    }
})
</script>

<style lang="scss" scoped></style>
