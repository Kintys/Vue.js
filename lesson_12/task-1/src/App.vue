<template>
    <nav>
        <router-link to="/">Головна</router-link> |<router-link to="/teachers">Вчителі</router-link> |
        <router-link to="/subjects">Предмет</router-link> | <router-link to="/assigment">Призначення</router-link>
    </nav>
    <router-view />
</template>
<script>
import { mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions(['loadData']),
        ...mapActions('teachers', ['loadTeacherList']),
        ...mapActions('lessons', ['loadLessonsList']),
    },
    mounted() {
        this.loadData()
        this.loadTeacherList()
        this.loadLessonsList()
    },
}
</script>

<style lang="scss">
// #app {
//     font-family: Avenir, Helvetica, Arial, sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//     text-align: center;
//     color: #2c3e50;
// }
.button {
    padding: 10px;
    background-color: royalblue;
    border-radius: 20px;
    margin-left: 20px;
    &:not(:last-child) {
        margin-bottom: 10px;
    }
    &:hover {
        transition: all 0.3s ease 0s;
        background-color: darkgoldenrod;
    }
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
</style>
