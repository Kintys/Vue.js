<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'HomeView',
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
