<template>
  <section class="section-wrapper">
    <div class="section-wrapper__header">
      <div class="section-wrapper__title">推荐歌单</div>
      <div class="section-wrapper__more"></div>
    </div>
    <div class="section-wrapper__body">
      <slot></slot>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section-wrapper {
  margin: 8px 0;
  padding: 8px 0;
  background: #fff;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
  }
  &__title {
    font-weight: 600;
    font-size: 20px;
    line-height: 1;
  }
  &__body {
    margin-top: 8px;
  }
}
</style>