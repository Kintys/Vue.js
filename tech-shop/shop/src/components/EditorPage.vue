<template>
    <div class="editor">
        <div class="inp">
            <label> title <input type="text" v-model="editObjct.title" /></label>
            <label> brand <input type="text" v-model="editObjct.brand" /></label>
            <label>page<input type="number" v-model="editObjct.page" value="1" /></label>
            <label>photo<input type="file" @change="loadImage" /></label>
            <label>count <input type="number" v-model="editObjct.count" /></label>
            <label>review<input type="number" v-model="editObjct.review" /></label>
            <label>oldPrice<input type="number" v-model="editObjct.price.oldPrice" /></label>
            <label>currentPrice<input type="number" v-model="editObjct.price.currentPrice" /></label>
            <v-btn @click="onSend">send</v-btn>
        </div>
        <div>
            <p>Razer</p>
            <p>razer</p>
            <p>HP</p>
            <p>hp</p>
            <p>MSI</p>
            <p>msi</p>
            <p>adata</p>
            <p>ADT</p>
            <p>Gigabyte</p>
            <p>gigabyte</p>
            <p>Roccat</p>
            <p>roccat</p>
            EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH
        </div>
    </div>
    <!-- <div class="card">
        <LoadingPage v-if="isLoading" />
        <ErrorPage v-else-if="hasError" />
        <ProductCardItem v-if="!hasError" v-for="item in list" :key="item.id" :card-item-data="item" />
    </div>

    <div><v-pagination v-model="page" :length="getPageNumbers" rounded="circle"></v-pagination></div> 

    <v-expansion-panels class="mb-6">
        <v-expansion-panel v-for="i in 3" :key="i">
            <v-expansion-panel-title expand-icon="mdi-menu-down"> Item </v-expansion-panel-title>
            <v-expansion-panel-text
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.</v-expansion-panel-text
            >
        </v-expansion-panel>
    </v-expansion-panels> -->
</template>

<script setup>
import ErrorPage from '@/components/ErrorPage.vue'
import { useGeneralStore } from '@/stores/general'
import LoadingPage from '@/components/LoadingPage.vue'
import { onBeforeMount, onMounted, ref, watch, computed } from 'vue'
import ProductCardItem from '@/views/HomePages/new-products-section/products/ProductCardItem.vue'
import { useLaptopListStore } from '@/stores/laptop'
import { storeToRefs } from 'pinia'
import { getSomeList } from '@/stores/firebase.js'
const { isLoading, hasError } = storeToRefs(useGeneralStore())
const { getPageNumbers } = storeToRefs(useLaptopListStore())
const { addItem, loadItemsList, getItemListWithPageNumber } = useLaptopListStore()
const page = ref(1)
// const list = ref(null)
const list = computed(() => getItemListWithPageNumber(page.value))
// watch(page, (newVal) => {
//     list.value = getItemListWithPageNumber(newVal)
// })

const editObjct = ref({
    title: null,
    brand: null,
    img: null,
    description: 'EX DISPLAY : MSI Pro 16 Flex-036AU 15.6 MULTITOUCH',
    count: null,
    review: null,
    page: 3,
    price: {
        currentPrice: null,
        oldPrice: null
    }
})

function onSend() {
    const newArr = getSomeList()
    newArr.forEach((element) => {
        addItem(element)
    })
}
function loadImage(event) {
    const file = event.target.files[0]
    if (file) {
        let reader = new FileReader()
        reader.onload = (e) => {
            editObjct.value.img = e.target.result
        }
        reader.readAsDataURL(file)
    }
}

// onBeforeMount(() => {
//     loadItemsList()
// })
// onMounted(() => {
//     list.value = getItemListWithPageNumber(page.value)
// })
</script>

<style lang="scss" scoped>
.inp {
    margin: 200px;
    width: 300px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    input {
        outline: 2px solid black;
        width: 100%;
    }
}
.editor {
    display: flex;
    align-items: center;
}
.card {
    position: relative;
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-template-rows: repeat(4, auto);
}
</style>
