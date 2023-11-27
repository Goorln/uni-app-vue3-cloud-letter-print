<script setup>
import { ref } from 'vue'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
const files = ref(null)
const imageStyles = ref({
  width: 320,
  height: 440,
})
const upload = () => {
  files.value.upload()
}
const goToNext = () => {
  if (!files.value.files.length) {
    uni.showToast({ icon: 'none', title: '请选择明信片正面图片~' })
  } else {
    uni.navigateTo({ url: '/pages/postcard/edit' })
  }
}
</script>

<template>
  <view class="chooseImg">
    <button class="replaceBtn" @tap="upload">更换图片</button>
    <uni-file-picker
      limit="1"
      ref="files"
      :del-icon="false"
      :disable-preview="true"
      :autoUpload="false"
      :imageStyles="imageStyles"
    />
    <button class="button" :style="{ bottom: safeAreaInsets?.bottom + 'px' }" @tap="goToNext">
      下 一 步
    </button>
  </view>
</template>

<style lang="scss">
.chooseImg {
  padding: 20rpx 40rpx;
  .replaceBtn {
    color: #007aff;
    background: transparent;
    border: 2rpx solid #007aff;
    width: 200rpx;
    height: 56rpx;
    line-height: 56rpx;
    margin-left: 40rpx;
    margin-bottom: 40rpx;
  }
  .button {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    overflow: hidden;

    width: 80%;
    height: 68rpx;
    line-height: 68rpx;
  }
}
</style>
