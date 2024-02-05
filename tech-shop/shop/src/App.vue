<script setup>
import { RouterView } from 'vue-router'
import { onBeforeMount } from 'vue'
import { usePcListStore } from '@/stores/pcList'
import { useLaptopListStore } from '@/stores/laptop'
import { useMonitorsStore } from '@/stores/monitoris'
import { useSocialListStore } from '@/stores/social'
import { useFeedbackStore } from '@/stores/feedback'

const laptop = useLaptopListStore()
const pcList = usePcListStore()
const monitors = useMonitorsStore()
const social = useSocialListStore()
const feedback = useFeedbackStore()
async function loadData() {
    await laptop.loadShortItemList(5)
    await pcList.loadShortItemList(10)
    await monitors.loadShortItemList(5)
    await social.loadItemsList()
    await feedback.loadItemsList()
}

onBeforeMount(() => {
    loadData()
})
</script>

<template>
    <RouterView />
</template>

<style lang="scss"></style>
