<template>
  <section class="section-wrapper">
    <div class="section-wrapper__header">
      <div class="section-wrapper__title">{{title}}</div>
      <div class="section-wrapper__more">
        <span>更多</span>
        <van-icon name="arrow" />
      </div>
    </div>
    <div v-if="$slots.default" class="section-wrapper__body">
      <slot></slot>
    </div>
  </section>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    require: true
  }
})
</script>

<style lang="scss" scoped>
.section-wrapper {
  margin: 8px 0;
  padding: 16px 0;
  background: #fff;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
  }
  &__title {
    font-weight: 500;
    font-size: 18px;
    line-height: 1;
  }
  &__more {
    padding: 4px 8px;
    font-size: 12px;
    line-height: 1;
    border-radius: 99px;
    border: 1px solid rgba(0, 0, 0, .1);
  }
  &__body {
    margin-top: 16px;
  }
}
</style>