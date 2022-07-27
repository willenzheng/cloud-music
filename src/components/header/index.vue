<template>
  <header class="m-header">
    <div class="m-header__main">
      <div class="m-header__left">
        <span  class="material-icons">menu</span>
      </div>
      <div class="m-header__center">
      </div>
      <div class="m-header__right">
        <span  class="material-icons">search</span>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>

defineProps({
  transparent: {
    type: Boolean,
  }
})
</script>

<style lang="scss" scoped>
.m-header {
  --header-height: 40px;
  height: var(--header-height);
  .m-header__main {
    position: fixed;
    width: 100%;
    height: var(--header-height);
    padding: 0 var(--size-normal);
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--color-bg);
  }
}
</style>