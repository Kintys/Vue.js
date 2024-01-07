<template>
    <div class="loading-container">
        <div class="loading-container__box">
            <font-awesome-icon :icon="['fas', 'spinner']" size="6x" spin class="icon" />
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.loading-container {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    height: 100%;
    width: 100%;
    background: rgb(255, 255, 255);
    &__box {
        position: relative;
        height: 10%;
    }
    .icon {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>
