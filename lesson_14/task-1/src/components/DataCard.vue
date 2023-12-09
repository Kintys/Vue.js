<template>
    <div class="card">
        <div class="card__content">
            <div class="card__img">
                <slot>
                    <img class="image-card" :src="isDefaultImg" alt="#" />
                </slot>
            </div>
            <p>{{ cardProps.title }}</p>
            <slot name="subTitle"> {{ cardProps.price }} грн </slot>
        </div>
        <button>Купити</button>
    </div>
</template>

<script>
export default {
    name: 'DataCard',
    props: {
        cardProps: {
            type: Object,
            required: true,
        },
        defaultImg: {
            type: String,
            default:
                'https://st.depositphotos.com/1400069/2216/i/380/depositphotos_22163909-stock-photo-natural-snowflake.jpg',
        },
    },
    computed: {
        isDefaultImg() {
            return this.cardProps.imgSrc ?? this.defaultImg
        },
    },
}
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    flex-direction: column;
    width: 200px;
    gap: 10px;
    border: 2px solid salmon;
    padding: 10px;
    border-radius: 20px;
    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-grow: 1;
    }
    &__img {
        flex-grow: 1;
        width: 150px;
    }
    .image-card {
        max-width: 100%;
    }
}
</style>
