<template>
    <div v-if="categoryProductsList">
        <ProductInlineCards
            class="product-manager"
            v-for="(item, i) in categoryProductsList"
            :product-list="item"
            :key="i"
            :category-card="categorySettings[i]"
        />
    </div>
</template>

<script setup>
import { computed } from 'vue'
import ProductInlineCards from './ProductInlineCards.vue'
import { usePcListStore } from '@/stores/pcList'
import { useLaptopListStore } from '@/stores/laptop'
import { useMonitorsStore } from '@/stores/monitoris'
import { categorySettings } from './settings'

const { getItemsListWithNumber: shortLaptopList } = useLaptopListStore()
const { getItemsListWithNumber: shortPcList } = usePcListStore()
const { getItemsListWithNumber: shortMonitorsList } = useMonitorsStore()

const categoryProductsList = computed(() => {
    return [shortPcList(5), shortLaptopList(5), shortMonitorsList(5)]
})
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.product-manager {
    &:not(:last-child) {
        @include adaptiveValue('margin-bottom', 31, 15);
    }
}
</style>
