<template>
    <div class="spoller">
        <div @click="onOpenSpoller" class="spoller__titles">
            <span class="spoller__label">{{ label }}</span>
            <span class="spoller__icons"
                ><font-awesome-icon
                    class="spoller__icon"
                    icon="chevron-down"
                    :class="{ ['icon-up']: isVisibleMenuSpoller }"
            /></span>
        </div>
        <Transition name="slide-fade">
            <div class="spoller__box" v-show="isVisibleMenuSpoller">
                <slot name="spoller-container">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores iste dolore facere at. Neque
                    temporibus nihil ab atque rem, corrupti, dolores debitis necessitatibus tempora placeat quaerat.
                    Harum eius nesciunt odit?
                </slot>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { ref } from 'vue'
defineProps({
    label: {
        type: String,
        default: ''
    }
})
const isVisibleMenuSpoller = ref(false)

function onOpenSpoller() {
    !isVisibleMenuSpoller.value ? (isVisibleMenuSpoller.value = true) : (isVisibleMenuSpoller.value = false)
}
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.spoller {
    // .spoller__titles
    &__titles {
        position: relative;
        display: flex;
        justify-content: space-between;
    }

    // .spoller__label

    &__label {
        font-weight: 600;
    }

    // .spoller__icon

    &__icon {
        margin-left: toRem(3);
    }
    &__box {
        font-size: toRem(13);
        font-weight: 400;
        line-height: 210%;
    }
}
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-4px);
    opacity: 0;
}
.icon-up {
    transform: rotate(180deg);
}
</style>
