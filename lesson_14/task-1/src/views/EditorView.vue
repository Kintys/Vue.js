<template>
    <div class="editor">
        <select @change="selectedPoduct">
            <option v-for="product in getProductList" :key="product.id" :value="product.id">
                {{ product.title }}
            </option>
        </select>
        <label class="editor__lable">
            Назва продукту
            <input v-model="selectedObj.title" type="text" />
        </label>
        <label class="editor__lable">
            Фото продукту(Лінк)
            <input v-model="selectedObj.imgSrc" type="text" />
        </label>
        <label class="editor__lable">
            Назва продукту
            <input v-model="selectedObj.price" type="number" />
        </label>
        <button type="submit" @click="onSave">Save</button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'EditorView',
    data() {
        return {
            selectedObj: {},
        }
    },
    computed: {
        ...mapGetters('product', ['getProductList', 'getProductById']),
    },
    methods: {
        ...mapActions('product', ['editProduct']),
        selectedPoduct(productId) {
            this.selectedObj = { ...this.getProductById(productId.srcElement.value) }
        },
        onSave() {
            this.editProduct(this.selectedObj)
        },
    },
}
</script>

<style lang="scss" scoped></style>
