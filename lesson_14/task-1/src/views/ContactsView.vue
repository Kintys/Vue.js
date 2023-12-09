<template>
    <contacts-master-page>
        <h2>Наші контакти</h2>
        <p>Адреса магазину: біля будинку Баби Галі</p>
        <p>Менеджер: ДіД Петро</p>
        <p>Заступник: онука Софійка</p>
    </contacts-master-page>
</template>

<script>
import ContactsMasterPage from '@/MasterPage/ContactsMasterPage.vue'
export default {
    name: 'ContactsView',
    components: {
        ContactsMasterPage,
    },
}
</script>

<style lang="scss" scoped></style>
