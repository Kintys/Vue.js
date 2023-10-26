<template>
  <div class="container-body">
    <a :href="shopCardData.link" class="body-img">
      <img :src="shopCardData.imgSrc" alt="#" />
    </a>
    <div class="body-content">
      <a class="body-title" :href="shopCardData.link">{{
        shopCardData.title
      }}</a>
      <div class="body-discount">
        Ваша економія :
        <span class="body-discount-value">{{ shopCardData.discount }} ₴</span>
      </div>
      <div class="body-old-price">{{ shopCardData.oldPrice }} ₴</div>
      <div class="body-price">{{ shopCardData.price }} ₴</div>
      <a class="body-button" :href="shopCardData.link">Купити</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComputerShopCard",
  props: {
    shopCardData: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="css" scoped>
.container-body {
  display: flex;
  max-width: 610px;
  padding: 10px;
  position: relative;
}
.container-body::after {
  content: "";
  bottom: -10%;
  left: 0;
  background-color: grey;
  width: 100%;
  height: 1px;
  position: absolute;
}
.container-body:hover {
  transition: all 0.3s ease 0s;
  box-shadow: 1px 2px 1px rgba(0, 0, 255, 0.411);
}
.body-img {
  width: 200px;
}
.body-img img {
  max-width: 100%;
  border-radius: 3px;
}
.body-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-grow: 1;
  gap: 10px;
  padding-left: 20px;
}
.body-title {
  color: blue;
}
.body-discount {
  font-size: 10px;
}
.body-discount-value {
  color: red;
  font-size: 10px;
}
.body-old-price {
  color: gray;
  position: relative;
  font-size: 14px;
}
.body-old-price::after {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 1px;
  background-color: gray;
}
.body-price {
  font-size: 20px;
  color: red;
}
.body-button {
  align-self: flex-end;
  margin-right: 2px;
  padding: 8px;
  color: white;
  background-color: green;
  border-radius: 5px;
}
.body-button:hover {
  transition: all 0.3s ease 0s;
  color: white;
  background-color: black;
}
</style>
