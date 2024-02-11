<template>
    <div class="about-product">
        <header class="about-product__header">
            <h2 class="about-product__title">{{ getCurrentItem?.title }}</h2>
            <a href="#" class="about-product__subtitle">{{
                $t('detailsProductPage.descriptionProductPage.subLink')
            }}</a>
        </header>
        <slot name="about-product-content">
            <div class="about-product__content">
                <slot name="item-window"> </slot>
                <slot name="item-window-2"> </slot>
                <slot name="item-window-3"> </slot>
            </div>
        </slot>
        <footer class="about-product__footer">
            <div class="about-product__block">
                <div class="about-product__contacts contacts">
                    <b class="contacts__question"
                        >{{ $t('detailsProductPage.descriptionProductPage.questionTitle') }} ?</b
                    >
                    <a class="contacts__contacts-link" href="#">{{
                        $t('detailsProductPage.descriptionProductPage.contactsLink')
                    }}</a>
                </div>
                <p class="about-product__id">SKU D5515AI</p>
            </div>
        </footer>
    </div>
    <a href="#" class="about-product__info"
        ><b>+ {{ $t('detailsProductPage.descriptionProductPage.info') }}</b></a
    >
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCatalogStore } from '@/stores/catalog'
const { getCurrentItem } = storeToRefs(useCatalogStore())
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.about-product {
    &:not(:last-child) {
        @include adaptiveValue('margin-bottom', 100, 20, 0, 1240, 998);
    }
    @include adaptiveValue('padding-left', 60, 10);

    // .about-product__header

    &__header {
        &:not(:last-child) {
            margin-bottom: toRem(24);
        }
    }

    // .about-product__title

    &__title {
        font-size: toRem(32);
        font-weight: 500;
        &:not(:last-child) {
            margin-bottom: toRem(13);
        }
    }

    // .about-product__subtitle

    &__subtitle {
        color: var(--Color---3, #0156ff);
        font-size: toRem(12);
        @media (any-hover: hover) {
            &:hover {
                text-decoration: underline;
            }
        }
    }

    // .about-product__content

    &__content {
        &:not(:last-child) {
            margin-bottom: toRem(31);
        }
    }

    // .about-product__description

    &__description {
        font-size: toRem(18);
        font-weight: 300;
        line-height: toRem(30); /* 166.667% */
        &:not(:last-child) {
            margin-bottom: toRem(44);
        }
    }

    // .about-product__colors

    &__colors {
    }

    // .about-product__footer

    &__footer {
        display: flex;
        flex-direction: column;
    }

    // .about-product__block

    &__block {
        flex-grow: 1;
        display: flex;
        justify-content: space-between;
        @media (max-width: $mobile) {
            flex-direction: column;
            align-items: center;
        }
    }

    // .about-product__contacts

    &__contacts {
        display: flex;
        column-gap: toRem(8);
    }

    // .about-product__id

    &__id {
    }

    // .about-product__info

    &__info {
        justify-self: flex-end;
    }
}
.contacts {
    // .contacts__question

    &__question {
        font-size: toRem(12);
    }

    // .contacts__contacts-link

    &__contacts-link {
        color: var(--Color---3, #0156ff);
        font-size: toRem(12);
        @media (any-hover: hover) {
            &:hover {
                text-decoration: underline;
            }
        }
    }
}
</style>
