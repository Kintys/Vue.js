<template>
    <ProductInlineCards
        class="product-manager"
        v-if="categoryProductsList"
        v-for="(item, i) in categoryProductsList"
        :product-list="item"
        :key="i"
        :category-card="categorySettings[i]"
    />
</template>

<script setup>
import { computed } from 'vue'
import ProductInlineCards from './ProductInlineCards.vue'
import { usePcListStore } from '@/stores/pcList'
import { uselaptopListStore } from '@/stores/laptop'
import { useMonitorsStore } from '@/stores/monitoris'
import { categorySettings } from './settings'
const { getItemsListWithNumber: shortLaptopList } = uselaptopListStore()
const { getItemsListWithNumber: shortPcList } = usePcListStore()
const { getItemsListWithNumber: shortMonitorsList } = useMonitorsStore()

const categoryProductsList = computed(() => {
    return [shortLaptopList(5), shortPcList(5), shortMonitorsList(5)]
})
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.product-manager {
    &:not(:last-child) {
        margin-bottom: toRem(31);
    }
}
</style>
