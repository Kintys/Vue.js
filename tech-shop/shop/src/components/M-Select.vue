<template>
    <div class="m-select">
        <span class="m-select__prefex">{{ prefex }}</span
        >{{ label }}
        <span><v-icon>mdi-menu-down</v-icon></span>
    </div>
</template>

<script setup>
defineProps({
    prefex: {
        type: String,
        default: ''
    },
    label: {
        type: String,
        default: ''
    }
})
</script>

<style lang="scss" scoped></style>
