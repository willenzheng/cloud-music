<!-- 首页 -->
<template>
  <div class="index">
    <router-view />

    <!-- 播放控制组件 start -->
    <cover @click="isPlayPageShow = true" :style="isPlayPageShow ? 'left: 50%;transform: translateX(-50%);bottom: 50%;translateY(50%);width: 200px;height: 200px;' : null" />
    <play-bar @click="isPlayPageShow = true" />
    <play-page v-model="isPlayPageShow" />
    <!-- 播放控制组件 end -->

    <!-- 底部导航栏 start -->
    <van-tabbar
      v-model="active"
      active-color="var(--color-primary)"
      inactive-color="var(--color-inactive)"
    >
      <van-tabbar-item
        v-for="item in tabbarList"
        :key="item.name"
        :to="item.route"
        replace
      >
        <template #icon>
          <i class="iconfont" :class="`icon-${item.icon}`" />
        </template>
        <span>{{ item.name }}</span>
      </van-tabbar-item>
    </van-tabbar>
    <!-- 底部导航栏 end -->
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import cover from '../../components/Cover.vue'
import playBar from '../../components/PlayBar.vue'
import playPage from '../../components/PlayPage.vue'
import tabbarList from '../../data/tabbar.json';

const active = ref(0);
const route = useRoute()
tabbarList.forEach((item, index) => {
  if (route.path.indexOf(item.route) !== -1) {
    active.value = index
  }
})

const isPlayPageShow = ref(false)

</script>

<style lang="scss" scoped>
.index {
  min-height: 100%;
  background: #f0f0f0;
  .play-bar {
    position: fixed;
    bottom: 50px;
  }
}
</style>
