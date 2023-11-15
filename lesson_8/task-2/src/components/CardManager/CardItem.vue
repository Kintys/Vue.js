<template>
    <div class="car-container car">
        <a :href="card.link" class="car__body">
            <div class="car__img">
                <img :src="card.image" alt="car" />
            </div>
            <div class="car__content">
                <h3 class="car__title">{{ card.title }}</h3>
                <div class="car__price price">
                    <div class="price__dollars">{{ card.price }} $</div>
                    <div class="price__hryvnes">{{ card.price * 38 }} Грн.</div>
                </div>
                <div class="car__info info">
                    <div class="info__lock">м.{{ card.local }}</div>
                    <div class="info__fuel">Тип палива: {{ card.fuelType }}</div>
                    <div class="info__mileage">Пробіг: {{ card.mileage }} тис.</div>
                    <div class="info__year">Рік:{{ card.year }}</div>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: 'CardItem',
    props: {
        card: {
            type: Object,
            default: () => ({}),
        },
    },
}
</script>

<style lang="scss" scoped>
.car-container {
}
.car {
    &__body {
        border-radius: 10px;
        background-color: rgba(165, 42, 42, 0.724);
        display: flex;
        gap: 30px;
        padding: 10px;
        align-items: flex-start;
        height: 100%;
        &:hover {
            background-color: rgba(172, 255, 47, 0.527);
        }
    }
    // .car__img

    &__img {
        width: 300px;
        img {
            max-width: 100%;
        }
    }

    // .car__content

    &__content {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    // .car__title

    &__title {
        font-size: 24px;
        color: red;
        &:hover {
            text-decoration: underline;
        }
    }

    // .car__price

    &__price {
        font-weight: 700;
        display: flex;
        gap: 30px;
        font-size: 20px;
    }

    // .car__info

    &__info {
    }
}
.price {
    // .price__dollars

    &__dollars {
        color: green;
    }

    // .price__hryvnes

    &__hryvnes {
        color: rgba(8, 0, 255, 0.413);
    }
}
.info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    font-size: 18px;

    // .info__lock

    &__lock {
        &:hover {
            text-decoration: underline;
        }
    }

    // .info__fuel

    &__fuel {
        &:hover {
            text-decoration: underline;
        }
    }

    // .info__mileage

    &__mileage {
        &:hover {
            text-decoration: underline;
        }
    }
    &__year {
        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
