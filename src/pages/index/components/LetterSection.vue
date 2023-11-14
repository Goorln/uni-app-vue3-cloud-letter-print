<script setup></script>

<template>
  <view class="section">
    <navigator class="item left" url="/pages/common/instructions?type=0" hover-class="none">
      正常信件</navigator
    >
    <view class="item right">
      <navigator class="r-item" url="/pages/common/instructions?type=1" hover-class="none">
        明信片</navigator
      >
      <view class="r-item">回家倒计时</view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.section {
  padding: 20rpx;
  display: flex;
  justify-content: space-between;
  .item {
    width: 49%;
    border-radius: 12rpx;
  }
  .left {
    background: pink;
    height: 360rpx;
  }
  .right {
    .r-item {
      border-radius: 12rpx;
      background: pink;
      height: 172rpx;
      &:last-child {
        margin-top: 16rpx;
      }
    }
  }
}
</style>
