<template>
    <div class="about-product">
        <header class="about-product__header">
            <h2 class="about-product__title">MSI MPG Trident 3</h2>
            <a href="#" class="about-product__subtitle">Be the first to review this product</a>
        </header>
        <slot name="about-product-content">
            <div class="about-product__content">
                <p class="about-product__description">
                    MSI MPG Trident 3 10SC-005AU Intel i7 10700F, 2060 SUPER, 16GB RAM, 512GB SSD, 2TB HDD, Windows 10
                    Home, Gaming Keyboard and Mouse 3 Years Warranty Gaming Desktop
                </p>
                <div class="about-product__colors"></div>
            </div>
        </slot>
        <footer class="about-product__footer">
            <div class="about-product__block">
                <div class="about-product__contacts contacts">
                    <b class="contacts__question">Have a Question?</b>
                    <a class="contacts__contacts-link" href="#">Contact Us</a>
                </div>
                <p class="about-product__id">SKU D5515AI</p>
            </div>
        </footer>
        <a href="#" class="about-product__info">+ More information</a>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.about-product {
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
