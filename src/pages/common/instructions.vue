<script setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { normalLetterInstrcImgs, postcardInstrcImgs } from '@/static/json/dataJson.js'

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

const imgArr = ref([])
const type = ref(0)
onLoad((options) => {
  type.value = options.type
  imgArr.value = options.type == 0 ? normalLetterInstrcImgs : postcardInstrcImgs
})

const startMake = () => {
  if (type.value == 0) {
    uni.navigateTo({ url: '/pages/letter/letter' })
  } else {
    uni.navigateTo({ url: '/pages/postcard/index' })
  }
}
</script>

<template>
  <view class="instructions">
    <view v-for="(item, index) in imgArr" :key="index"><image :src="item" mode="widthFix" /></view>
    <view class="toolbar" :style="{ paddingBottom: safeAreaInsets?.bottom + 10 + 'px' }">
      <button class="button" @tap="startMake">开始制作</button>
      <view class="agree">
        <label>
          <checkbox value="cb" checked="true" color="#fff" style="transform: scale(0.7)" />
          我已同意《云信印协议》
        </label>
      </view>
    </view>
    <!-- 底部占位空盒子 -->
    <view
      :style="{ paddingBottom: safeAreaInsets?.bottom + 80 + 'px' }"
      class="toolbar-height"
    ></view>
  </view>
</template>

<style lang="scss">
.toolbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: #fff;
  border-top: 1rpx solid #eaeaea;

  .button {
    font-size: 28rpx;
    margin: 10rpx 148rpx;
    border-radius: 40rpx;
    color: #fff;
    background: $uni-color-primary;
  }
  .agree {
    border-radius: 50%;
    text-align: center;
    font-size: $uni-font-size-base;

    /* 微信中样式 */
    /* #ifdef APP-PLUS ||MP-WEIXIN */
    checkbox .wx-checkbox-input.wx-checkbox-input-checked {
      color: #fff;
      background: #007aff;
    }
    /* #endif */
  }
}
</style>
