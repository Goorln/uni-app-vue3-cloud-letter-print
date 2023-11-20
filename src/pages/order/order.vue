<script setup>
import { ref } from 'vue'
import { stepList, feeInfo } from '@/static/json/dataJson.js'

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<template>
  <view class="order">
    <!-- 步骤条 -->
    <YxySteps :options="stepList" :active="4" />
    <view class="list">
      <button hover-class="none" class="item arrow" open-type="openSetting">收件地址</button>
      <button hover-class="none" class="item arrow" open-type="feedback">寄件地址</button>
    </view>
    <!-- 商品列表 -->
    <view class="goods">
      <view class="goods-item">
        <image class="image" src="https://z1.ax1x.com/2023/11/17/pitLRKg.png" mode="scaleToFill" />
        <view class="title">
          <view>挂号信回信套装</view>
          <view>数量：X 1</view>
          <view>单价：￥9.9</view>
        </view>
      </view>
      <view class="goods-item">
        <image class="image" src="https://z1.ax1x.com/2023/11/17/pitL1ER.jpg" mode="scaleToFill" />
        <view class="title">
          <view>挂号信回信套装</view>
          <view>数量：X 1</view>
          <view>单价：￥9.9</view>
        </view>
      </view>
    </view>
    <!-- 邮寄方式 -->
    <!-- 费用信息 -->
    <view class="feeInfo" :style="{ paddingBottom: safeAreaInsets?.bottom + 60 + 'px' }">
      <view class="title">费用信息</view>
      <view class="fee-item" v-for="(item, index) in feeInfo" :key="index">
        <text>{{ item.name }}</text>
        <text>￥{{ item.price }}</text>
      </view>
      <view class="fee-item item-last">
        <text></text>
        <text>需付款 <text>￥19.9</text></text>
      </view>
    </view>
    <view class="toolbar" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
      <button class="button">立即付款</button>
    </view>
  </view>
</template>

<style scoped lang="scss">
/* 列表 */
.list {
  margin-top: 20rpx;
  padding: 0 20rpx;
  background-color: #fff;
  margin-bottom: 20rpx;
  border-radius: 10rpx;
  .item {
    line-height: 90rpx;
    padding-left: 10rpx;
    font-size: 30rpx;
    color: #333;
    border-top: 1rpx solid #ddd;
    position: relative;
    text-align: left;
    border-radius: 0;
    background-color: #fff;
    &::after {
      width: auto;
      height: auto;
      left: auto;
      border: none;
    }
    &:first-child {
      border: none;
    }
    &::after {
      right: 5rpx;
    }
  }
  .arrow::after {
    content: '>';
    position: absolute;
    top: 50%;
    color: #ccc;
    font-family: 'erabbit' !important;
    font-size: 32rpx;
    transform: translateY(-50%);
  }
}
.goods {
  background: #fff;
  .goods-item {
    padding: 20rpx 10rpx;
    margin: 0 20rpx;
    display: flex;
    border-bottom: 1rpx solid #ccc;
    .image {
      width: 204rpx;
      height: 204rpx;
    }
    .title {
      margin-left: 30rpx;
      line-height: 60rpx;
      & > view:not(:first-child) {
        color: #737373;
        font-size: 26rpx;
      }
    }
  }
}
.feeInfo {
  margin-top: 20rpx;
  background: #fff;
  padding: 20rpx;
  .title {
    margin-bottom: 20rpx;
  }
  .fee-item {
    font-size: 26rpx;
    color: #737373;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10rpx;
    padding: 0 10rpx;
  }
  .item-last {
    font-size: 30rpx;
  }
}
.toolbar {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  background-color: #fff;
  .button {
    width: 80%;
    font-size: 28rpx;
    border-radius: 40rpx;
    color: #fff;
    background: $uni-color-primary;
  }
}
</style>
