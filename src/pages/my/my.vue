<script setup>
import { formatOrderState } from '@/static/json/dataJson.js'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
</script>

<template>
  <view class="header">
    <view :style="{ paddingTop: safeAreaInsets?.top + 36 + 'px' }"></view>
    <view class="user-info">
      <img src="https://z1.ax1x.com/2023/11/17/pitRfYj.jpg" class="user-avatar" alt="" />
      <view>user</view>
      <view>guoq</view>
    </view>
    <uni-card class="order-card" title="我的订单" extra="查看全部">
      <text class="uni-body"></text>
      <view class="items">
        <view v-for="(item, index) in formatOrderState" :key="index">
          <image class="image" :src="item.picture" mode="scaleToFill" />
          <view>{{ item.title }}</view>
        </view>
      </view>
    </uni-card>
    <view class="invited-code">
      <view class="code">邀请码 > </view>
      <view class="code">推广收益 > </view>
    </view>
    <uni-card class="money">
      <view class="item">
        <view>&金额</view>
        <view>></view>
      </view>
      <view class="item">
        <view>￥0</view>
        <view>充值最高享9折优惠</view>
      </view>
    </uni-card>
    <uni-card padding="0" spacing="0">
      <uni-list>
        <uni-list-item
          title="地址管理"
          link
          to="/pagesMember/address/address"
          showArrow
        ></uni-list-item>
        <uni-list-item title="日记存稿" showArrow></uni-list-item>
        <uni-list-item title="回信查询" showArrow></uni-list-item>
        <uni-list-item title="我的优惠券" showArrow></uni-list-item>
        <uni-list-item title="订单查询" showArrow></uni-list-item>
      </uni-list>
    </uni-card>
  </view>
</template>

<style scoped lang="scss">
.header {
  box-sizing: border-box;
  height: 540rpx;
  background-image: linear-gradient(to bottom, #b0d9b1, #79ac78);
  // background-image: linear-gradient(to bottom, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);
  .user-info {
    text-align: center;
    color: $uni-text-color-inverse;
    .user-avatar {
      width: 200rpx;
      height: 200rpx;
      border-radius: 160rpx;
    }
  }
  .order-card {
    .items {
      display: flex;
      justify-content: space-between;
      padding-top: 26rpx;
      .image {
        width: 84rpx;
        height: 84rpx;
        padding-bottom: 10rpx;
      }
    }
  }
  .invited-code {
    padding: 4rpx 28rpx;
    display: flex;
    height: 96rpx;
    line-height: 96rpx;
    color: $uni-text-color-inverse;
    .code {
      width: 48%;
      background-image: linear-gradient(to right, #ffc3a0 0%, #ffafbd 100%);
      border-radius: $uni-border-radius-base;
      padding-left: 32rpx;
      &:last-child {
        margin-left: 24rpx;
      }
    }
  }
  .money {
    .item {
      display: flex;
      justify-content: space-between;
      &:first-child {
        font-size: $uni-font-size-lg;
        padding-bottom: $uni-spacing-col-base;
      }
    }
  }
}
</style>
