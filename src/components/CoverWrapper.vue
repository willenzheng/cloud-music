<template>
  <div class="cover-wrapper">
    <div class="cover-wrapper__shadow"></div>
    <div class="img-wrapper">
      <img :src="imgSrc">
    </div>
  </div>
</template>

<script lang="ts" setup>

defineProps({
  imgSrc: {
    type: String,
  }
})
</script>

<style lang="scss" scoped>
.cover-wrapper {
  --border-radius: 8px;
  position: relative;
  flex-shrink: 0;
  width: 100px;
  height: 100px;
  transition: transform .25s;
  &:active {
    transform: scale(95%);
  }
  &__shadow {
    position: absolute;
    top: -5%;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    height: 90%;
    border-radius: 8px;
    background: #e7e7e7;
  }
  .img-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>