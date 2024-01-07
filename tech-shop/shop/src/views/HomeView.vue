<script setup>
import WelcomeSlider from './HomePages/WelcomeSlider.vue'
import NewProductSection from '@/views/HomePages/new-products-section/NewProductSection.vue'
import MainMasterPage from '@/master-page/MainMasterPage.vue'
import SocialMediaSectionVue from '@/views/HomePages/socialMedia/SocialMediaSection.vue'
import AnnotationSection from '@/views/HomePages/AnnotationSection.vue'
</script>

<template>
    <main-master-page>
        <WelcomeSlider />
        <NewProductSection />
        <SocialMediaSectionVue />
        <AnnotationSection />
    </main-master-page>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/swiper.scss';
</style>
