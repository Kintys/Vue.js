<template>
    <card-manager />
</template>

<script>
import CardManager from '@/components/CardManager'
import { mapActions } from 'vuex'
export default {
    name: 'App',
    components: {
        CardManager,
    },
    methods: {
        ...mapActions(['loadData']),
    },
    created() {
        this.loadData()
    },
}
</script>

<style lang="scss">
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: border-box;
}
li {
    list-style: none;
}
a {
    color: inherit;
}
a:link,
a:visited {
    text-decoration: none;
}
img {
    vertical-align: top;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    font-weight: inherit;
    font-size: inherit;
}
#app {
    // font-family: Avenir, Helvetica, Arial, sans-serif;
    // -webkit-font-smoothing: antialiased;
    // -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    // color: #2c3e50;
    // margin-top: 60px;
    background-color: rgba(85, 107, 47, 0.11);
    min-height: 100%;
}
</style>
