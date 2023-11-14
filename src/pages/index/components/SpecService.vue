<script setup></script>

<template>
  <view class="service">
    <view class="title"> 特色服务</view>
    <view class="list">
      <view class="item">
        <view class="item-t">
          <uni-icons type="calendar" size="50"></uni-icons>
          <text>签到有奖</text>
        </view>
        <view class="item-c">打卡赚积分兑礼品</view>
      </view>
      <view class="item">
        <view class="item-t">
          <uni-icons type="calendar-filled" size="50"></uni-icons>
          <text>日记存稿</text>
        </view>
        <view class="item-c">记录生活中的点滴</view>
      </view>
      <view class="item">
        <view class="item-t">
          <uni-icons type="calendar-filled" size="50"></uni-icons>
          <text>回信查询</text>
        </view>
        <view class="item-c">山高水远期待和你相见</view>
      </view>
      <view class="item">
        <view class="item-t">
          <uni-icons type="email" size="50"></uni-icons>
          <text>代收信件</text>
        </view>
        <view class="item-c">免费代收，可拍照发送</view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.service {
  margin: 2rpx 20rpx;
  padding: 20rpx;
  border-radius: 12rpx;
  background: pink;
  .title {
    height: 60rpx;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .item {
      width: 50%;
      margin-bottom: 24rpx;
      .item-t {
        display: flex;
        align-items: center;
      }
      .item-c {
        color: $uni-text-color-grey;
        font-size: $uni-font-size-base;
      }
    }
  }
}
</style>
