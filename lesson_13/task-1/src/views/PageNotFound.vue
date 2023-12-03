<template>
    <router-link :to="{ name: 'home' }">Головна</router-link>
    <div>
        <h1 class="headline"><font-awesome-icon icon="ban" class="icon-not-page" />404</h1>
        <p class="headline-massenge">Page Not Found</p>
    </div>
</template>

<script>
export default {
    name: 'PageNotFound',
}
</script>

<style lang="scss" scoped>
.icon-not-page {
    font-size: 100px;
    margin-right: 10px;
}
.headline {
    padding-top: 10px;
    font-weight: 900;
    font-size: 100px;
}
.headline-massenge {
    font-size: 100px;
}
</style>
