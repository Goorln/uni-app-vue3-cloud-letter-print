<script setup>
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<template>
  <view class="coupon">
    <view :style="{ paddingTop: safeAreaInsets?.top + 36 + 'px' }"></view>
    <view
      class="section"
      style="
        background: url('https://z1.ax1x.com/2023/11/17/pitRteO.png') center center/cover no-repeat;
      "
    ></view>
  </view>
</template>

<style scoped lang="scss">
.coupon {
  background-color: rgb(34, 22, 62);
  .section {
    height: 100vh;
  }
}
</style>
