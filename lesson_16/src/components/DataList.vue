<template>
    <div class="container">
        <div v-if="isLoading" class="loading">
            <div class="loading__box"><img class="loading__img" src="../assets/loading.gif" alt="#" /></div>
        </div>
        <div>
            <v-alert v-if="hasError" density="compact" type="warning" color="red" title="Error">{{ hasError }}</v-alert>
        </div>
        <slot></slot>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'DataList',
    components: {},
    computed: {
        ...mapGetters(['hasError', 'isLoading']),
    },
    methods: {},
}
</script>

<style lang="scss" scoped>
.container {
    display: grid;
    grid-template-columns: 500px;
    gap: 10px;
    padding: 10px;
}
.loading {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(128, 128, 128, 0.323);
    width: 100%;
    height: 100%;
    // .loading__box

    &__box {
        position: relative;
        width: 100%;
        height: 100%;
    }

    // .loading__img

    &__img {
        position: absolute;
        top: 20%;
    }
}

.list {
    display: flex;
    padding: 5px;
    align-items: center;
    justify-content: space-between;
}
</style>
