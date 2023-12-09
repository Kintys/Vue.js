<template>
    <div class="footer-container">
        <slot name="rating" class=""> Рейтинг магазину: 42145 </slot>
        <div>
            <slot name="status"> Статуc: <span class="status">відкрито</span> </slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterInfo',
}
</script>

<style lang="scss" scoped></style>
