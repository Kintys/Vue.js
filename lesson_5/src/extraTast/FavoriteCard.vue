<template>
  <a class="container" :href="cardData.link">
    <div class="img">
      <img :src="cardData.imgSrc" alt="#" />
    </div>
    <a :href="cardData.link">{{ cardData.title }}</a>
  </a>
</template>

<script>
export default {
  name: "FavoriteCard",
  props: {
    cardData: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="css" scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 80px;
  height: 80px;
  border: 2px solid green;
  border-radius: 12px;
}
.img {
  width: 30px;
  height: 30px;
}
.img img {
  max-width: 100%;
}
.title {
  color: blueviolet;
}
</style>
