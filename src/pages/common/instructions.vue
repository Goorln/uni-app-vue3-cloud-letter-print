<script setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import {
  normalLetterInstrcImgs,
  postcardInstrcImgs,
  postcardPopupList,
} from '@/static/json/dataJson.js'

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

const imgArr = ref([])
const type = ref(0)
onLoad((options) => {
  type.value = options.type
  imgArr.value = options.type == 0 ? normalLetterInstrcImgs : postcardInstrcImgs
})
// 是否同意协议
const checked = ref(false)

const popup = ref()
const startMake = () => {
  if (!checked.value) {
    return uni.showToast({ icon: 'none', title: '请勾选同意协议~' })
  } else if (type.value == 0) {
    uni.navigateTo({ url: '/pages/letter/letter' })
  } else {
    popup.value.open()
  }
}
</script>

<template>
  <view class="instructions">
    <view v-for="(item, index) in imgArr" :key="index"><image :src="item" mode="widthFix" /></view>
    <view class="toolbar" :style="{ paddingBottom: safeAreaInsets?.bottom + 10 + 'px' }">
      <button class="button" @tap="startMake">开始制作</button>
      <view class="agree">
        <label for="agree" class="label" @tap="checked = !checked">
          <text class="circle" :class="{ checked: checked }"></text>
          <text>我已同意《云信印协议》</text>
        </label>
      </view>
    </view>
    <uni-popup class="popup" ref="popup" type="center" background-color="#fff">
      <uni-icons type="closeempty" class="close" size="20" @tap="popup.close()"></uni-icons>
      <view class="popup-content">
        <view v-for="(it, k) in postcardPopupList" :key="k">
          <view class="popup-text">{{ it.text }}</view>
          <button class="popup-btn">{{ it.button }}</button>
        </view>
      </view>
    </uni-popup>
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
    font-size: $uni-font-size-base;

    .label {
      display: flex;
      align-items: center;
      justify-content: center;
      .circle {
        display: inline-block;
        width: 22rpx;
        height: 22rpx;
        border: 2rpx solid #007aff;
        border-radius: 50%;
        margin-right: 8rpx;
        &.checked {
          background: #fff;
          position: relative;
        }
        &.checked::before {
          content: '';
          width: 16rpx;
          height: 16rpx;
          background: #007aff;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }

    /* 微信中样式 */
    /* #ifdef APP-PLUS ||MP-WEIXIN */
    // checkbox .wx-checkbox-input.wx-checkbox-input-checked {
    //   color: #fff;
    //   background: #007aff;
    // }
    /* #endif */
  }
}
.popup {
  width: 320rpx;
  .close {
    display: flex;
    justify-content: flex-end;
    height: 20rpx;
  }
  .popup-content {
    padding: 20rpx 70rpx;
    .popup-text {
      font-size: 28rpx;
    }
    .popup-btn {
      height: 56rpx;
      line-height: 56rpx;
      margin: 12rpx;
    }
  }
}
</style>
