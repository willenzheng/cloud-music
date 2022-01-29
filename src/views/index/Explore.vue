<template>
  <div class="explore">
    <banner-swiper />
    <king-kong-area />
    <section-wrapper  style="margin-top: 0;"></section-wrapper>
  </div>
</template>

<script lang="ts" setup>
import bannerSwiper from '../../components/TheExploreBannerSwiper.vue';
import kingKongArea from '../../components/TheExploreKingKongArea.vue';
import sectionWrapper from '../../components/SectionWrapper.vue';
</script>

<style lang="scss" scoped>
.explore {
  min-height: 100%;
  background: #f0f0f0;
}
</style>