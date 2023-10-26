<template>
  <div class="container-card">
    <a :href="productData.link" class="card-img">
      <img :src="productData.imgSrc" alt="#" />
    </a>
    <div class="card-body">
      <a :href="productData.link" class="headline-body">
        <div class="body-block">
          <div class="head-logo">
            <img :src="productData.logo" alt="#" />
          </div>
          <h3 class="head-title">{{ productData.companyTitle }}</h3>
        </div>
        <div v-if="isAvailability" class="head-availability">в наявності</div>
      </a>
      <div class="content-body">{{ productData.description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FruitsProductCard",
  props: {
    productData: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    isAvailability() {
      return this.productData.number > 0;
    },
  },
};
</script>

<style lang="css" scoped>
.container-card {
  background-color: gray;
  display: flex;
  flex-direction: column;
  width: 270px;
  height: 100%;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
}
.container-card:hover {
  box-shadow: 2px 2px 2px black;
}
.card-img {
  max-width: 220px;
  height: 200px;
  overflow: hidden;
  border-radius: 20px;
}
.card-img img {
  transition: all 0.3s ease 0s;
  height: 200px;
}
.card-img img:hover {
  transform: scale(1.05);
}
.card-body {
  margin-right: 20px;
}
.headline-body {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  padding: 2px 10px;
  justify-content: space-between;
  width: 100%;
}
.body-block {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-grow: 1;
}

.head-logo img {
  width: 16px;
  height: 16px;
}
.head-availability {
  color: rgb(8, 187, 8);
}
</style>
