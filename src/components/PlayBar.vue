<template>
  <div class="play-bar">
    <div class="title">
      <span>Waterfall</span>
      <span>-</span>
      <span class="title__artist">The Strone Roses</span>
    </div>
    <div class="btn-group">
      <div class="material-icons btn-play-control">
        pause_circle_outline
      </div>
      <div class="material-icons btn-play-list">
        format_list_bulleted
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.play-bar {
  width: 100%;
  height: 50px;
  background: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 80px;
  padding-right: 16px;
  font-size: 12px;
  .title {
    &__artist {
      font-size: 10px;
    }
  }
  .btn-group {
    display: flex;
    div {
      margin-left: 8px;
      color: rgb(94, 94, 94);
    }
  }
}
</style>
