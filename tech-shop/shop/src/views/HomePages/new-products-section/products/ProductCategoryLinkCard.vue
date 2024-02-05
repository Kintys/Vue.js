<template>
    <a
        :href="showCardData.link"
        class="show-card"
        :style="{ '--background-image': `url('${getImageUrl(showCardData.image)}')` }"
    >
        <div class="show-card__box">
            <h3 class="show-card__title">{{ $t(showCardData.title) }}</h3>
        </div>
        <a :href="showCardData.link" class="show-card__link">{{ $t('newProductSection.previewCard.link') }}</a>
    </a>
</template>

<script setup>
defineProps({
    showCardData: {
        type: Object,
        require: true
    }
})

const getImageUrl = (name) => {
    return new URL(`../../../../assets/${name}`, import.meta.url).href
}
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.show-card {
    margin-right: toRem(2);
    // .show-card__title
    position: relative;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: toRem(235);
    background: var(--background-image) 0 0 / cover;
    @media (any-hover: hover) {
        &:hover {
            outline: 1px solid #0156ff;
        }
    }
    &__box {
        display: flex;
        flex-grow: 1;
        align-items: center;
        text-align: center;
    }
    &__title {
        font-size: toRem(20);
        line-height: 130%;
        font-weight: 700;
        max-width: toRem(120);
        text-wrap: wrap;
    }
    // .show-card__link
    &__link {
        padding-bottom: toRem(32);
        @media (any-hover: hover) {
            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>
