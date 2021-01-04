<template>
  <div class="home overflow-hidden bg-gray-300">
    <div class="flex bg-red-600 mt-0 py-2 px-6">
      <el-input placeholder="Search" v-model="searchText">
        <i slot="prefix" class="el-input__icon fas fa-search text-red-600"></i>
        <i slot="suffix" style="width: 40px" class="suffix el-input__icon fas fa-barcode text-black bg-yellow-400 w-full"></i>
      </el-input>
      <div class="text-white w-12 flex justify-end items-center">
        <i class="fas fa-shopping-cart"></i>
      </div>
    </div>
    <el-carousel autoplay arrow="never" class="h-1/4" trigger="click">
      <el-carousel-item class="bg-gray-600" v-for="item in 4" :key="item">
        <img class="w-full h-full" :src="`/img/${item}.jpg`" alt="" />
      </el-carousel-item>
    </el-carousel>
    <div class="categories whitespace-nowrap overflow-auto">
      <div class="cate my-2 h-8 text-center inline-flex justify-center items-center text-xs bg-white rounded-full m-2" v-for="cate of categories" :key="cate">
        <div class="whitespace-pre-wrap">
          {{ cate }}
        </div>
      </div>
    </div>
    <div class="order-again">
      <div class="order-header font-bold">Order Again</div>
      <div class="orders-wrapper whitespace-nowrap overflow-scroll">
        <div v-for="order in orders" :key="order.url" class="order p-1 m-2 inline-flex w-1/3 bg-white flex-col justify-center items-center">
          <div style="height: 70px;" class="image w-1/2">
            <img class="w-full" :src="`/orders/${order.url}`" alt="" />
          </div>
          <div class="rate w-full flex justify-between">
            <div class="stars text-base flex justify-center items-center">
              <i class="el-icon-star-on text-yellow-200"></i>
              <div class="star-num">
                <span v-if="order.stars === 0">-</span>
                <span v-else>{{ order.stars }}</span>
              </div>
            </div>
            <div class="like text-red-500">
              <i v-if="order.liked" @click="order.liked = false" class="fas fa-heart"></i>
              <i v-else @click="order.liked = true" class="far fa-heart"></i>
            </div>
          </div>
          <div style="font-size: 9px;" class="info w-full flex justify-between font-bold">
            <div class="left bg-yellow-200 rounded px-0.5">{{ order.remaining }} left</div>
            <div class="distance">{{ order.distance }}km</div>
          </div>
          <div class="price font-bold self-start">${{ order.price.toFixed(2) }}</div>
        </div>
      </div>
    </div>

    <div class="stores">
      <div class="stores-header font-bold">Stores Near You</div>
    </div>
  </div>
</template>

<script>
// import "element-ui/lib/theme-chalk/input.css";
export default {
  name: "Home",
  props: {},
  data() {
    return {
      searchText: "",
      categories: ["Clothes and Fashion", "Home & lifestyle", "Food & Beverage", "Electronic Devices", "Cookies, Snacks & Candy", "Entertainment", "Music & Culture"],
      orders: [
        {
          url: "corona.jpg",
          stars: 0,
          liked: true,
          remaining: 100,
          distance: 1120.89,
          price: 540,
        },
        {
          url: "beer.jpg",
          stars: 1,
          liked: false,
          remaining: 100,
          distance: 1120.89,
          price: 540,
        },
        {
          url: "gel.png",
          stars: 1,
          liked: false,
          remaining: 100,
          distance: 1120.89,
          price: 540,
        },
        {
          url: "med.jpg",
          stars: 1,
          liked: false,
          remaining: 100,
          distance: 1120.89,
          price: 540,
        },
        {
          url: "milk.png",
          stars: 1,
          liked: false,
          remaining: 100,
          distance: 1120.89,
          price: 540,
        },
        {
          url: "omo.jpg",
          stars: 1,
          liked: false,
          remaining: 100,
          distance: 1120.89,
          price: 540,
        },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style></style>
