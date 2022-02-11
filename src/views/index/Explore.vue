<template>
  <div class="explore">
    <banner-swiper />
    <king-kong-area />
    <section-wrapper title="推荐歌单" style="margin-top: 0">
      <ul class="flex-list">
        <li class="flex-item" v-for="item in imgList">
          <cover-wrapper :imgSrc="item.imgSrc" />
        </li>
      </ul>
    </section-wrapper>
    <section-wrapper title="微微微微凉-的雷达歌单">
      <ul class="flex-list">
        <li class="flex-item" v-for="item in imgList">
          <cover-wrapper :imgSrc="item.imgSrc" />
        </li>
      </ul>
    </section-wrapper>
    <section-wrapper title="专属场景歌单">
      <ul class="flex-list">
        <li class="flex-item" v-for="item in imgList">
          <cover-wrapper :imgSrc="item.imgSrc" />
        </li>
      </ul>
    </section-wrapper>
  </div>
</template>

<script lang="ts" setup>
import bannerSwiper from '../../components/TheExploreBannerSwiper.vue';
import kingKongArea from '../../components/TheExploreKingKongArea.vue';
import sectionWrapper from '../../components/SectionWrapper.vue';
import coverWrapper from '../../components/CoverWrapper.vue';

interface imgObj {
  imgSrc: string
}
const imgList: any = [
  {
    imgSrc: 'https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1643379317028-29f58257cb29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1643415701048-53d283681e25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1643559259659-0a6da64de886?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1643559247329-7254c71646f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  },
  {
    imgSrc: 'https://images.unsplash.com/photo-1643499428357-f2685cbcc875?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
  },
];
</script>

<style lang="scss" scoped>
.explore {
  min-height: 100%;
  background: #f0f0f0;
  padding-bottom: 150px;
  .flex-list {
    display: flex;
    padding: 8px 16px;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    .flex-item {
      flex-shrink: 0;
      &:not(:last-child) {
        margin-right: 12px;
      }
    }
  }
}
</style>
