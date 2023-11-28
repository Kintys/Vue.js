<template>
    <nav>
        <router-link :to="{ name: 'home' }">Home</router-link> |
        <router-link :to="{ name: 'driverAndBus' }">Driver</router-link> |
        <router-link
            :to="{
                name: 'driverAndBus',
                params: {
                    bus: '/bus',
                },
            }"
            >Bus</router-link
        >
        |
        <router-link :to="{ name: 'assigment' }">Assigment</router-link> |
        <router-link :to="{ name: 'contact' }">Contact</router-link>
    </nav>
    <router-view />
</template>

<script>
import { mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions('driver', ['loadDriverList']),
        ...mapActions('bus', ['loadBusList']),
    },
    created() {
        this.loadDriverList()
        this.loadBusList()
    },
}
</script>
<style lang="scss">
#app {
    // font-family: Avenir, Helvetica, Arial, sans-serif;
    // -webkit-font-smoothing: antialiased;
    // -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    // color: #2c3e50;
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
