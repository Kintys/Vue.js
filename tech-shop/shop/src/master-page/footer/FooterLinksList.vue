<template>
    <div class="footer-list">
        <h4 class="footer-list__list-title">{{ linkData.title }}</h4>
        <div class="footer-list__links">
            <slot name="sentence">
                <a v-if="linkData.linksArr" :href="link" v-for="{ label, link } in linkData.linksArr" :key="label">{{
                    label
                }}</a>
                <p v-else v-for="({ label }, i) in linkData.addressItem" :key="i" v-html="label"></p>
            </slot>
        </div>
    </div>
</template>

<script setup>
defineProps({
    linkData: {
        type: Object
    }
})
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';

.footer-list {
    font-weight: 300;
    line-height: 132.5%; /* 18.55px */
    // .footer-list__list-title

    &__list-title {
        opacity: 0.5;
        &:not(:last-child) {
            margin-bottom: toRem(28);
        }
    }

    // .footer-list__links

    &__links {
        display: flex;
        flex-direction: column;
        row-gap: toRem(12);
        a,
        p {
            cursor: pointer;
            @media (any-hover: hover) {
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
}
</style>
