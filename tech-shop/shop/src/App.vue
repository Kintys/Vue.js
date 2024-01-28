<script setup>
import { RouterView } from 'vue-router'
import { onBeforeMount } from 'vue'
import { usePcListStore } from '@/stores/pcList'
import { useLaptopListStore } from '@/stores/laptop'
import { useMonitorsStore } from '@/stores/monitoris'
const laptop = useLaptopListStore()
const pcList = usePcListStore()
const monitors = useMonitorsStore()

async function loadData() {
    await laptop.loadShortItemList(25)

    // await pcList.loadShortItemList(5)

    // await monitors.loadShortItemList(5)
}
onBeforeMount(async () => {
    await loadData()
})
</script>

<template>
    <RouterView />
</template>

<style lang="scss"></style>
