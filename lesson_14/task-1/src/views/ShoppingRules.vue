<template>
    <contacts-master-page>
        <h2>Правила купівлі</h2>
        <ul>
            <li>Купуємо багато</li>
            <li>Платимо швидко</li>
            <li>Насолоджуємось товаром</li>
        </ul>
    </contacts-master-page>
</template>

<script>
import ContactsMasterPage from '@/MasterPage/ContactsMasterPage.vue'
export default {
    name: 'ShoppingRules',
    components: {
        ContactsMasterPage,
    },
}
</script>

<style lang="scss" scoped></style>
