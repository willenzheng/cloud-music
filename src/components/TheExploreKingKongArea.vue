<template>
  <ul class="king-kong-area">
    <li v-for="item in iconList" class="icon"></li>
  </ul>
</template>

<script lang="ts" setup>
const iconList = ['','','','','','','']
</script>

<style lang="scss" scoped>
.king-kong-area {
  padding: 16px;
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, .05);
  &::-webkit-scrollbar {
    display: none;
  }
  .icon {
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgb(238, 199, 196);
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
}
</style>