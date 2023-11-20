<script setup></script>

<template>
  <view>
    <image class="banner" src="https://z1.ax1x.com/2023/11/17/pitRg0S.png" mode="aspectFill" />
    <!--  占位盒子 -->
    <view class="banner-height"></view>
    <YxyGoods />
  </view>
</template>

<style scoped lang="scss">
page {
  overflow: hidden;
}
.banner {
  height: 280rpx;
  margin-bottom: 20rpx;
  position: fixed;
  z-index: 1;
}
.banner-height {
  height: 280rpx;
}

// 底部占位空盒子
.toolbar-height {
  height: 100rpx;
}
</style>
