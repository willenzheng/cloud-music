<!-- 首页 -->
<template>
  <div class="index">
    <router-view />
    <i class="iconfont icon-explore" />

    <!-- 底部导航栏 start -->
    <van-tabbar
      v-model="active"
      active-color="var(--color-primary)"
      inactive-color="var(--color-inactive)"
    >
      <van-tabbar-item
        v-for="item in tabbarList"
        :key="item.name"
        replace
        :to="item.route"
      >
        <template slot="icon">
          <i class="iconfont" :class="`icon-${item.icon}`" />
        </template>
        <span>{{ item.name }}</span>
      </van-tabbar-item>
    </van-tabbar>
    <!-- 底部导航栏 end -->
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import tabbarList from '../../data/tabbar.json';

const active = ref(0);

</script>

<style>
.index {
  min-height: 100%;
}
</style>
