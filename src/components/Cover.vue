<template>
  <div class="cover spin">
    <div class="cover__img">
      <img src="https://www.biography.com/.image/t_share/MTgwMjk3MjI5MjU5NTE1MDMw/gettyimages-3315233.jpg" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cover {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #000;
  z-index: 1000;
  position: fixed;
  bottom: 56px;
  left: 35px;
  transition: all .4s;
  display: flex;
  justify-content: center;
  align-items: center;
  &__img {
    width: 75%;
    height: 75%;
    border-radius: 50%;
    background: #fff;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &.spin {
    transform-origin: left;
    animation: spin 8s linear infinite;
    @keyframes spin {
      from {
        transform: rotate(0deg) translateX(-50%);
        
      }
      to {
        
        transform: rotate(360deg) translateX(-50%);
      }
    }
  }
}
</style>