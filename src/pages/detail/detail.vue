<script setup></script>

<template>
  <view class="detail">
    <view class="preview">
      <image class="image" src="/static/images/home/mailbox.png" mode="scaleToFill" />
    </view>
    <view class="content">
      <view>商品名称:士大夫十分</view>
      <view class="desc"
        >商品描述：十分士大夫十分士大夫胜多负少发射点发生士大夫士大夫士大夫随风倒古典风格的股东会的十分士大夫</view
      >
      <view class="price">商品价格</view>
    </view>
  </view>
</template>

<style lang="scss">
.detail {
  padding: 20rpx 30rpx;
  .preview {
    display: flex;
    justify-content: center;
    .image {
      width: 340rpx;
      height: 340rpx;
      margin-bottom: 32rpx;
    }
  }
  .content {
    .desc {
      color: #cdcdcd;
      padding: 30rpx 0;
      font-size: 26rpx;
    }
    .price {
      color: aquamarine;
    }
  }
}
</style>
