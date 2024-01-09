<template>
    <div class="m-select" ref="dropDown">
        <div class="m-select__label">
            <span v-if="prefix" class="m-select__prefix">{{ prefix }}</span
            ><span class="m-select__label-text" @click="onOpen()">{{ currentLabel }}</span>
            <span
                ><span v-if="clearBtn && selectedOption" @click="onClearLabel" class="m-select__clear"
                    ><font-awesome-icon icon="circle-xmark" size="xl" /></span
                ><v-icon
                    @click="onOpen()"
                    class="m-select__icon"
                    style="transition: all 0.3s"
                    :class="{ ['icon-up']: isMenuVisible }"
                    >mdi-menu-down</v-icon
                ></span
            >
            <transition name="slide-fade">
                <div v-if="isMenuVisible" class="m-select__options">
                    <span
                        v-for="(option, i) in optionsList"
                        @click="onSelect(option)"
                        :key="i"
                        class="m-select__options-item"
                        >{{ option.name ?? option }}</span
                    >
                </div>
            </transition>
        </div>
    </div>
</template>
<script setup>
import { computed, ref, defineEmits, onMounted, onBeforeUnmount } from 'vue'
const props = defineProps({
    prefix: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    },
    optionsList: {
        type: Array,
        default: () => []
    },
    modelValue: {
        default: null
    },
    clearBtn: {
        type: Boolean
    }
})
const emit = defineEmits(['update:modelValue'])
const dropDown = ref(null)
const selectedOption = ref(null)
const isMenuVisible = ref(false)
const currentLabel = computed(() => {
    return selectedOption?.value?.name || selectedOption?.value || props.label
})

function onSelect(opt) {
    selectedOption.value = opt
    emit('update:modelValue', opt.value || opt)
    isMenuVisible.value = false
}
function onOpen() {
    !isMenuVisible.value ? (isMenuVisible.value = true) : (isMenuVisible.value = false)
}

function onClose(element) {
    if (!dropDown.value.contains(element.target)) {
        isMenuVisible.value = false
    }
}
function onClearLabel() {
    selectedOption.value = null
}
onMounted(() => {
    window.addEventListener('click', onClose)
})
onBeforeUnmount(() => {
    window.removeEventListener('click', onClose)
})
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';
.m-select {
    // .m-select__label

    &__label {
        padding: toRem(20) toRem(16);
        border: toRem(2) solid #cacdd8;
        position: relative;
        width: toRem(200);
        align-items: center;
        font-size: toRem(13);
        display: flex;
        flex-wrap: nowrap;
        border-radius: toRem(2);
        text-wrap: nowrap;
    }
    &__label-text {
        margin-left: toRem(2);
        justify-self: none;
        flex-grow: 1;
        font-weight: 600;
        line-height: 210%;
    }
    // .m-select__prefex

    &__prefix {
        color: #a2a6b0;
        font-weight: 600;
        line-height: 210%; /* 27.3px */
    }

    // .m-select__options

    &__options {
        display: none;
        position: absolute;
        display: flex;
        left: -2px;
        top: 102%;
        width: 102%;
        flex-direction: column;
        padding: toRem(2);
        background: #fff;
        border: toRem(2) solid #cacdd8;
        border-radius: 0 0 toRem(10) toRem(10);
        z-index: 2;
        :last-child {
            border-radius: 0 0 toRem(10) toRem(10);
        }
    }

    // .m-select__options-item

    &__options-item {
        padding: toRem(10);
        &:not(:last-child) {
            margin-bottom: toRem(1);
        }
        @media (any-hover: hover) {
            &:hover {
                background-color: #0156ff32;
                transition: all 0.3s;
            }
        }
    }
    .slide-fade-enter-active {
        transition: all 0.3s ease-out;
    }

    .slide-fade-leave-active {
        transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateY(-5px);
        opacity: 0;
    }
    &__icon {
        transition: all 0.3s;
    }
}
.display {
    display: block;
}
.icon-up {
    transform: rotate(180deg);
}
</style>
