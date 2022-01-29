<template>
  <div class="banner-swiper">
    <van-swipe>
      <van-swipe-item v-for="item in bannerList">
        <div class="image-wrapper">
          <img :src="item" alt="" />
        </div>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script lang="ts" setup>
const bannerList = [
  'https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1643376093837-e34aa74a231b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1643397652696-e633822828fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
];
</script>

<style lang="scss" scoped>
.banner-swiper {
  background: #fff;
  .image-wrapper {
    width: 90%;
    margin: 20px auto;
    height: 100px;
    border-radius: 20px;
    background: #eee;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>