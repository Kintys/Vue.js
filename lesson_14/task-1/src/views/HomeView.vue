<template>
    <main-master-page>
        <div class="content">
            <h1>Вітаємо на нашому сайті</h1>
            <div class="text">
                <p>
                    А сьогодні в завтрашній день не всі можуть дивитися. Вірніше, дивитися можуть не тільки всі. Мало
                    хто може це робити.
                </p>
                <p>Сподіваюся, ви не будете чемними, і обов'язково щось купите.</p>
            </div>
        </div>
        <template #status>
            <div class="status">
                <div>Власник : БАБА Галя</div>
                <div class="status-img"><img src="../assets/picture-102488-1459772695.png" alt="baba galia" /></div>
            </div>
        </template>
    </main-master-page>
</template>

<script>
import MainMasterPage from '@/MasterPage/MainMasterPage.vue'

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
