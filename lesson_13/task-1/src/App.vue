<template>
    <router-view />
</template>
<script>
import { mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions('subjects', ['loadSubjectList']),
        ...mapActions('teachers', ['loadSubjectList']),
    },
    created() {
        this.loadSubjectList
    },
}
</script>
<style lang="scss">
body {
    display: flex;
    flex-direction: column;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.login-icon {
    margin-right: 5px;
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
