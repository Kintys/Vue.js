<template>
    <main-master-page
        ><h1>Вітаємо на сайті школи</h1>
        <p>У нашій школі учень сам вибирає уроки і вчителів</p>
        <p>Увійдіть для повноцінного використання</p>
    </main-master-page>
</template>

<script>
import MainMasterPage from '@/components/MainMasterPage.vue'

export default {
    name: 'HomeView',
    components: {
        MainMasterPage,
    },
}
</script>
