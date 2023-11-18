<template>
    <product-manager />
</template>

<script>
import { mapActions } from 'vuex'
import ProductManager from '@/components/ProductManager'
// @ is an alias to /src
export default {
    name: 'HomeView',
    components: { ProductManager },
    methods: {
        ...mapActions('brand', ['loadBrand']),
        ...mapActions('seller', ['loadSellers']),
        ...mapActions('laptop', ['loadLaptop']),
    },
    created() {
        this.loadBrand()
        this.loadSellers()
        this.loadLaptop()
    },
}
</script>
