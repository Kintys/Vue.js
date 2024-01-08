<template>
    <div class="m-select" ref="dropDown">
        <div class="m-select__label">
            <span v-if="prefix" class="m-select__prefix">{{ prefix }}</span
            ><span @click="onOpen()">{{ currentLabel }}</span>
            <span
                ><span v-if="clearBtn" @click="onClearLabel" class="m-select__clear"
                    ><font-awesome-icon icon="circle-xmark" /></span
                ><v-icon
                    @click="onOpen()"
                    class="m-select__icon"
                    style="transition: all 0.3s"
                    :class="{ ['icon-up']: isMenuVisible }"
                    >mdi-menu-down</v-icon
                ></span
            >
            <div v-if="isMenuVisible" class="m-select__options">
                <span
                    v-for="(option, i) in optionsList"
                    @click="onSelect(option)"
                    :key="i"
                    class="m-select__options-item"
                    >{{ option.name ?? option }}</span
                >
            </div>
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
    isMenuVisible.value = true
}

function onClose(element) {
    if (!dropDown.value.contains(element.target)) {
        isMenuVisible.value = false
    }
}
function onClearLabel() {
    selectedOption.value = props.label || null
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
        padding: toRem(20);
        border: 1px solid black;
        position: relative;
    }

    // .m-select__prefex

    &__prefix {
    }

    // .m-select__options

    &__options {
        display: none;
        position: absolute;
        display: flex;
        top: 64px;
        left: 0;
        width: 100%;
        flex-direction: column;
        background: #fff;
        z-index: 2;

        span {
            padding: toRem(10);
            border: 1px solid black;
            @media (any-hover: hover) {
                &:hover {
                    background-color: grey;
                }
            }
        }
    }

    // .m-select__options-item

    &__options-item {
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
