<template>
    <router-view />
</template>

<script>
import { mapActions } from 'vuex'
export default {
    created() {
        this.loadLaptopsList()
    },
    methods: {
        ...mapActions('laptops', ['loadLaptopsList']),
    },
}
</script>
<style lang="scss">
@import '../src/assets/scss/rest.scss';
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
