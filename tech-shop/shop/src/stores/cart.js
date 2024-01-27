import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useLaptopListStore } from './laptop'
import DbOperations from './helpers/DbOperations'
import { useAuthStore } from '@/stores/auth'

export const useCartStore = defineStore('cartList', () => {
    const orderDbList = new DbOperations('orderList')
    const user = useAuthStore()
    const cartList = ref([])
    const laptop = useLaptopListStore()

    const getCartList = computed(() => {
        return cartList?.value.map((product) => {
            const itemById = laptop.getItemById(product.productId)
            return {
                qtyToBuy: product.inputCount,
                ...itemById,
                subTotal: itemById.currentPrice * product.inputCount
            }
        })
    })
    const getOrderList = computed(() => {
        return {
            userId: user.getUser.uid,
            orderProduct: cartList.value.map((product) => ({
                productId: product.productId,
                numberOfOrders: product.inputCount
            }))
        }
    })

    const getSubtotalValue = computed(() =>
        getCartList.value.reduce((acc, item) => {
            return (acc = acc + item.subTotal)
        }, 0)
    )
    function addToCartList(obj) {
        let foundItem = cartList.value.findIndex((item) => item.productId === obj.productId)
        if (foundItem !== -1) {
            cartList.value[foundItem].inputCount += obj.inputCount
        } else cartList.value.push(obj)
    }
    function deleteFromCartList(id) {
        cartList.value = cartList.value.filter((product) => product.productId !== id)
    }
    function clearCartList() {
        cartList.value = []
    }

    async function addItemToOrderList() {
        await orderDbList.addItem(getOrderList.value)
    }

    return {
        cartList,
        getCartList,
        addToCartList,
        deleteFromCartList,
        clearCartList,
        addItemToOrderList,
        getSubtotalValue
    }
})
