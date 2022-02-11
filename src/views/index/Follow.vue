<template>
  <div>关注
    <div class="box">
      <div class="a"></div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.box {
  position: relative;
  width: 100px;
  height: 200px;
  background: red;
}
.box::before {
  content: '';
  position: absolute;
  top: -25px;
  width: 50px;
  height: 50px;
  background-color: blue;
}
</style>