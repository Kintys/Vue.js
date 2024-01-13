<template>
    <div class="filter-panel">
        <div class="filter-panel__content">
            <h2 class="filter-panel__title">Filters</h2>
            <v-btn class="filter-panel__button button">Clear Filter</v-btn>
            <div class="filter-panel__spollers">
                <MExpansionPanels label="category"></MExpansionPanels>
                <MExpansionPanels label="price"></MExpansionPanels>
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
                <MExpansionPanels label="filter-name">
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
                <div width="100%">
                    <v-btn @click="isSelectedFilterValue" class="filter-panel__button button"
                        >Apply Filters ({{ selected.length }})</v-btn
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import MExpansionPanels from '@/components/MExpansionPanels.vue'
import { useCatalogStore } from '@/stores/catalog.js'
import { ref, watch } from 'vue'
import { useFocus } from '@/compositionFunctions/focusFunc.js'
import { useLaptopListStore } from '@/stores/laptop'
import { storeToRefs } from 'pinia'

const { loadFilteredList } = useLaptopListStore()
const { focusesList, onFocus } = useFocus()

const { filterValueObject } = storeToRefs(useCatalogStore())
const { addFilterValueObject } = useCatalogStore()
const currentColor = ref(null)
const selected = ref([])

const colorList = ref(['red', 'blue', 'green'])
const filterCheckboxParams = ref([
    {
        label: 'CUSTOM PCS',
        value: 'CUSTOM PCS'
    },
    {
        label: 'MSI ALL-IN-ONE PCS',
        value: 'MSI ALL-IN-ONE PCS'
    },
    {
        label: 'HP/COMPAQ PCS',
        value: 'HP/COMPAQ PCS'
    }
])

function onSelectColor(index) {
    onFocus(index, 'focus-btn')
}
function isSelectedFilterValue() {
    loadFilteredList({
        firstOpt: ['color', '==', '#red'],
        secondOpt: ['params', '==', 'CUSTOM PCS'],
        thirdOpt: ['brand', '==', 'msi']
    })
}

watch(currentColor, (newVal) => {
    addFilterValueObject({
        colorValue: newVal
    })
})
watch(selected, (newVal_1) => {
    addFilterValueObject({
        filterValue: newVal_1
    })
})
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
    border: toRem(5) solid white;
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
