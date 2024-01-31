<template>
    <div class="filter-panel">
        <div class="filter-panel__content">
            <h2 class="filter-panel__title">Filters</h2>
            <v-btn class="filter-panel__button button" @click="clearFilterValue">Clear Filter</v-btn>
            <div class="filter-panel__spollers">
                <MExpansionPanels label="category">
                    <template #spoller-container>
                        <v-checkbox
                            v-for="checkBox in filterCheckboxParams"
                            :key="checkBox.label"
                            v-model="selected"
                            :label="checkBox.label"
                            :value="checkBox.value"
                            color="#0156ff"
                            class="filter-panel__check-box"
                        ></v-checkbox
                    ></template>
                </MExpansionPanels>
                <MExpansionPanels label="color">
                    <template #spoller-container>
                        <v-radio-group class="color__block" v-model="currentColor" inline>
                            <div
                                v-for="(item, i) in colorList"
                                :key="item"
                                :style="`background-color: ${item};`"
                                class="color__box"
                                ref="focusesList"
                                @click="onSelectColor(i)"
                            >
                                <v-radio class="color__btn" :color="item" :value="item"></v-radio>
                            </div>
                        </v-radio-group>
                    </template>
                </MExpansionPanels>
            </div>
            <div class="filter-panel__spoller-filter">
                <div width="100%">
                    <v-btn @click="addSelectedParams" class="filter-panel__button button">Apply Filters </v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import MExpansionPanels from '@/components/MExpansionPanels.vue'

import { useCatalogStore } from '@/stores/catalog.js'
import { ref, computed } from 'vue'
import { useFocus } from '@/compositionFunctions/focusFunc.js'
import { storeToRefs } from 'pinia'

const { focusesList, onFocus } = useFocus()
const { getCurrentColor, filterValueObject } = storeToRefs(useCatalogStore())
const { addFilterValueObject, clearFilterValue } = useCatalogStore()

const currentColor = ref(null)
const selected = ref([])

const filterCheckboxParams = ref([
    {
        label: 'Laptop',
        value: 'laptop'
    },
    {
        label: 'PC',
        value: 'pc'
    },
    {
        label: 'Monitors',
        value: 'monitor'
    }
])

const colorList = computed(() => [...new Set(getCurrentColor.value)])

function onSelectColor(index) {
    onFocus(index, 'focus-btn')
}
function addSelectedParams() {
    addFilterValueObject({
        color: [`${currentColor.value}`],
        category: selected.value
    })
}
</script>

<style lang="scss" scoped>
@import '@/assets/adaptive.scss';

.filter-panel {
    background: #f5f7ff;
    &__content {
        display: flex;
        flex-direction: column;
        padding: toRem(28) toRem(16);
    }
    &__title {
        font-size: toRem(16);
        font-weight: 700;
        text-align: center;
        &:not(:last-child) {
            margin-bottom: toRem(16);
        }
    }

    // .filter-panel__button

    &__button {
        &:not(:last-child) {
            margin-bottom: toRem(35);
        }
    }

    // .filter-panel__spollers

    &__spollers {
        row-gap: toRem(35);
        display: flex;
        flex-direction: column;
        &:not(:last-child) {
            margin-bottom: toRem(35);
        }
    }
    &__spoller-filter {
        display: flex;
        flex-direction: column;
        row-gap: toRem(16);
    }
    &__check-box {
    }
}

.focus-btn {
    display: grid;
    justify-items: center;
    align-items: center;
    &::before {
        content: '';
        width: 110%;
        height: 110%;
        background: transparent;
        border-radius: 50%;
        border: toRem(2) solid white;
        outline: toRem(2) solid #0156ff;
    }
}
.color {
    // .color__block

    &__block {
        padding-top: toRem(5);
    }
    &__box {
        background: rgba(0, 0, 0, 0.136);
        border-radius: 50%;
        margin-right: toRem(5);
        &:not(:last-child) {
            margin-bottom: toRem(10);
        }
        width: toRem(30);

        height: toRem(30);
        position: relative;
    }

    // .color__btn

    &__btn {
        opacity: 0;
        position: absolute;
        left: -15%;
        top: -12%;
    }
}
</style>
