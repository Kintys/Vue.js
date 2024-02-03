<script setup>
import { RouterView } from 'vue-router'
import { onBeforeMount } from 'vue'
import { usePcListStore } from '@/stores/pcList'
import { useLaptopListStore } from '@/stores/laptop'
import { useMonitorsStore } from '@/stores/monitoris'
// import { useCatalogStore } from '@/stores/catalog'

const laptop = useLaptopListStore()
const pcList = usePcListStore()
const monitors = useMonitorsStore()
// const catalog = useCatalogStore()

async function loadData() {
    await laptop.loadShortItemList(25)
    await pcList.loadShortItemList(25)
    await monitors.loadShortItemList(25)

    // setTimeout(() => {
    //     catalog.loadCatalogList()
    // }, 20000)
}

onBeforeMount(() => {
    loadData()
})
</script>

<template>
    <RouterView />
</template>

<style lang="scss"></style>
