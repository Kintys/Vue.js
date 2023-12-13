<template>
    <main-master-page>
        <div class="content">
            <h1>Вітаємо Вас на сторінці автопарку</h1>
        </div>
    </main-master-page>
</template>

<script>
import MainMasterPage from '@/MasterPage/MainMasterPage'

export default {
    name: 'HomeView',
    components: {
        MainMasterPage,
    },
}
</script>
<style scoped lang="scss">
.status {
    display: flex;
}
.status-img {
    width: 100px;
    height: 150px;
    img {
        max-width: 100%;
    }
}
.text {
    font-size: 20px;
}
</style>
