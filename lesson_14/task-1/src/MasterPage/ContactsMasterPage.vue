<template>
    <div class="container">
        <router-link :to="{ name: 'home' }">На головну</router-link>
        <slot></slot>
        <div class="gallery">
            <h3>Галерея</h3>
            <ol class="gallery">
                <li class="gallery__item">
                    <img v-for="{ image, id } in getGalleryList" :key="id" :src="image" class="gallery__img" />
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'ContactsMasterPage',
    computed: {
        ...mapGetters('gallery', ['getGalleryList']),
    },
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.gallery {
    // .gallery__item

    &__item {
        display: flex;
        gap: 10px;
    }

    // .gallery__img

    &__img {
        width: 200px;
        img {
            max-width: 100%;
        }
    }
}
</style>
