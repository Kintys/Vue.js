<script setup>
import { RouterView } from 'vue-router'
// import { onBeforeMount } from 'vue'
// import { usePcListStore } from '@/stores/pcList'
// import { uselaptopListStore } from '@/stores/laptop'
// import { useMonitorsStore } from '@/stores/monitoris'

// const laptop = uselaptopListStore()
// const pcList = usePcListStore()
// const monitors = useMonitorsStore()

// async function loadData() {
//     await pcList.loadShortItemList()
//     await laptop.loadShortItemList()
//     await monitors.loadShortItemList(5)
// }
// onBeforeMount(async () => {
//     await loadData()
// })
</script>

<template>
    <RouterView />
</template>

<style lang="scss"></style>
