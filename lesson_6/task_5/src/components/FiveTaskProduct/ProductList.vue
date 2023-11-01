<template>
  <div>
    <div class="container">
      <a :href="laptopCardItem.link" class="body-image">
        <img :src="laptopCardItem.imgSrc" alt="laptop" />
      </a>
      <div class="body-content">
        <a :href="laptopCardItem.link" class="body-title">{{
          laptopCardItem.title
        }}</a>
        <p class="body-description">{{ laptopCardItem.description }}</p>
        <p class="body-prise">{{ laptopCardItem.price }} ₴</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props: {
    laptopCardItem: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  border: 1px solid rgba(128, 128, 128, 0.505);
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  max-height: 450px;
}
.body-image {
  width: 250px;
}
.body-image img {
  width: 100%;
}
.body-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.body-title {
  font-size: 18px;
  text-decoration: none;
  color: red;
}
.body-description {
  font-weight: 600;
  font-style: italic;
}
.body-prise {
  color: orange;
  font-size: 20px;
  justify-self: flex-end;
}
</style>
