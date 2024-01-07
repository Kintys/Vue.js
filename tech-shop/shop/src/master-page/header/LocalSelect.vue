<template>
    <div class="local-select">
        <div class="local-select__img-box">
            <img
                class="local-select__image ibg"
                :src="getImageUrl(currentLocal.flag)"
                :alt="`flag ${currentLocal.title}`"
            />
        </div>
        <v-select
            class="local-select__select"
            v-model="currentLocal"
            :items="localList"
            return-object
            variant="solo"
        ></v-select>
    </div>
</template>

<script setup>
import { ref, reactive, watchEffect, onBeforeMount } from 'vue'
import { useLocales } from '@/modulHelpers/i18n'
const { setLocale } = useLocales()

const getImageUrl = (name) => {
    return new URL(`../../assets/${name}`, import.meta.url).href
}

const currentLocal = ref(null)
onBeforeMount(() => {
    const lastLocal = localStorage?.getItem('lastLocale')
    currentLocal.value = localList.find((local) => local.value === lastLocal) ?? localList[0]
})
const localList = reactive([
    { title: 'English', value: 'en', flag: 'icons/flag/GB.svg' },
    { title: 'Українська', value: 'ua', flag: 'icons/flag/UA.svg' }
])
watchEffect(() => {
    if (currentLocal.value) setLocale(currentLocal.value.value)
})
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.local-select {
    display: flex;
    align-items: center;
    gap: toRem(10);
    // .local-select__img-box

    &__img-box {
        position: absolute;
        width: toRem(54);
        height: toRem(34);
        object-fit: cover;
    }

    // .local-select__image

    &__image {
        max-width: 100%;
    }

    // .local-select__select

    &__select {
        position: relative;
        height: toRem(34);
        width: toRem(54);
        opacity: 0;
    }
}
</style>
