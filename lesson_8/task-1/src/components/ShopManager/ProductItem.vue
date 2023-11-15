<template>
  <div class="container">
    <div class="cart">
      <a :href="product.link" class="cart__item item">
        <div class="item__image">
          <img :src="product.productImage" />
        </div>
        <div class="item__content">
          <h4 class="item__title">{{ product.productTitle }}</h4>
          <div class="item__price">
            <div v-if="product.oldPrice" class="item__old-price">
              {{ product.oldPrice }}
            </div>
            <div class="item__current-price">{{ product.price }}</div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  &:not(:last-child) {
    margin-bottom: 10px;
  }
}
.cart {
  width: 400px;
  padding: 10px;
  background-color: rgba(128, 128, 128, 0.458);
  border-radius: 20px;

  // .cart__item

  &__item {
    display: flex;
    gap: 10px;
  }
}
.item {
  text-decoration: none;

  // .item__image

  &__image {
    width: 200px;
  }
  &__image img {
    max-width: 100%;
  }

  // .item__content

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  // .item__title

  &__title {
  }

  // .item__price

  &__price {
    width: 80px;
    text-align: center;
  }

  // .item__old-price

  &__old-price {
    position: relative;
    font-size: 14px;
    &::after {
      content: "";
      background-color: black;
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      height: 2px;
    }
  }

  // .item__current-price

  &__current-price {
    font-size: 20px;
    color: red;
  }
}
</style>
