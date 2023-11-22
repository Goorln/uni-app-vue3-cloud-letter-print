<script setup></script>

<template>
  <view class="service">
    <view class="title"> 特色服务</view>
    <view class="list">
      <view class="item">
        <view class="item-t">
          <uni-icons type="calendar" color="#79AC78" size="50"></uni-icons>
          <text>签到有奖</text>
        </view>
        <view class="item-c">打卡赚积分兑礼品</view>
      </view>
      <view class="item">
        <view class="item-t">
          <uni-icons type="calendar-filled" color="#79AC78" size="50"></uni-icons>
          <text>日记存稿</text>
        </view>
        <view class="item-c">记录生活中的点滴</view>
      </view>
      <view class="item">
        <view class="item-t">
          <uni-icons type="calendar-filled" color="#79AC78" size="50"></uni-icons>
          <text>回信查询</text>
        </view>
        <view class="item-c">山高水远期待和你相见</view>
      </view>
      <view class="item">
        <view class="item-t">
          <uni-icons type="email" color="#79AC78" size="50"></uni-icons>
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
  background-image: linear-gradient(to top, #ddfffd, rgb(246, 255, 255));
  .title {
    height: 60rpx;
    font-weight: 700;
    font-size: 34rpx;
  }
  .list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    .item {
      width: 50%;
      margin-bottom: 24rpx;
      &:nth-child(even) {
        padding-left: 40rpx;
      }
      .item-t {
        display: flex;
        align-items: center;
        text {
          font-weight: 700;
          padding-left: 20rpx;
        }
      }
      .item-c {
        color: $uni-text-color-grey;
        font-size: $uni-font-size-base;
      }
    }
  }
}
</style>
