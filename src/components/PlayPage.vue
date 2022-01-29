<template>
  <teleport to="#app">
    <div class="play-page" :class="animate" @click="show = false"></div>
  </teleport>
</template>

<script lang="ts" setup="props, context">
import { ref, computed, watch, nextTick } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['update:modelValue']);

const show = computed({
  get() {
    return props.modelValue;
  },
  set(val) {
    emit('update:modelValue', val);
  },
});

let animate = ref('hide');

watch(show, val => {
  if (val) {
    animate.value = 'show';
  } else {
    animate.value = 'hide';
  }
});
</script>

<style lang="scss" scoped>
.play-page {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  overflow: hidden;
  background: #fff;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url('https://www.biography.com/.image/t_share/MTgwMjk3MjI5MjU5NTE1MDMw/gettyimages-3315233.jpg') no-repeat center;
    background-size: cover;
    filter: blur(90px);
  }
  
  &.show {
    transform: none;
    transition: 0.25s ease-in;
  }
  &.hide {
    transform: translateY(100%);
    transition: 0.25s ease-out;
  }
}
</style>
