<!-- 首页 -->
<template>
  <div class='index'>
    <router-view />
    <van-tabbar v-model="active">
      <van-tabbar-item
        v-for="(item, index) in tabbarList"
        :key="index"
        icon="home-o"
        replace
        :to="item.route"
      >{{item.name}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

import tabbar from '@/data/tabbar.json'

export default {
  setup() {
    const tabbarList = tabbar
    console.log(tabbarList)
    let active = 1

    return {
      active,
      tabbarList
    }
  },
}



</script>

<style scoped>
</style>
