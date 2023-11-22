<script setup>
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<template>
  <view class="header">
    <view :style="{ paddingTop: safeAreaInsets?.top + 106 + 'rpx' }"></view>
    <view class="titlecontainer">
      <view class="title"> </view>
      <uni-notice-bar
        class="notice"
        color="#618264"
        background-color="#c7ede1"
        show-icon
        scrollable
        text="uni-app 版正式发布，开发一次，同时发布iOS、Android、H5、微信小程序、支付宝小程序、百度小程序、头条小程序等7大平台。"
      />
    </view>
  </view>
</template>

<style scoped lang="scss">
.header {
  box-sizing: border-box;
  height: 630rpx;
  background-image: linear-gradient(to bottom, #79ac78, #d0e7d2, #c7ede1);
  .titlecontainer {
    height: 490rpx;
    margin: 20rpx 32rpx 0 32rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      height: 360rpx;
      border-radius: 12rpx;
      background: url('https://z1.ax1x.com/2023/11/21/piac7VO.md.jpg') center center/cover no-repeat;
    }
    .notice {
      height: 110rpx;
    }
  }
}
</style>
