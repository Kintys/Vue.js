<template>
    <a class="brand" :href="brandData.link">
        <div class="brand__img"><img :src="getImageUrl(brandData.img)" :alt="`brand ${brandData.link}`" /></div>
    </a>
</template>

<script setup>
defineProps({
    brandData: { type: Object }
})

const getImageUrl = (name) => {
    return new URL(`../../../../assets/${name}`, import.meta.url).href
}
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.brand {
    @include adaptiveValue('padding-left', 22, 10);
    @include adaptiveValue('padding-right', 22, 10);
    @include adaptiveValue('padding-bottom', 35, 15);
    @include adaptiveValue('padding-top', 35, 15);
    display: flex;
    justify-content: center;
    align-items: center;
    @media (any-hover: hover) {
        &:hover {
            outline: toRem(1) solid #ccc;
        }
    }
    // .brand__img

    &__img {
        width: 100%; /* 154/200 */
        display: flex;
        justify-content: center;
        align-items: center;
        img {
            width: 100%;
        }
    }
}
</style>
