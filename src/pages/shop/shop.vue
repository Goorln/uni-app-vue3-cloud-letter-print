<script setup>
import { reactive } from 'vue'
const options = reactive([
  {
    icon: 'headphones',
    text: '客服',
  },
  {
    icon: 'shop',
    text: '店铺',
    info: 2,
    infoBackgroundColor: '#007aff',
    infoColor: 'red',
  },
  {
    icon: 'cart',
    text: '购物车',
    info: 2,
  },
])
</script>

<template>
  <view>
    <image class="banner" src="https://z1.ax1x.com/2023/11/17/pitRg0S.png" mode="aspectFill" />
    <view class="shop">
      <navigator
        class="item"
        url="/pages/detail/detail"
        open-type="navigate"
        hover-class="navigator-hover"
      >
        <image class="image" src="https://z1.ax1x.com/2023/11/17/pitRcm8.png" mode="scaleToFill" />
        <view class="name">士大夫大师傅</view>
        <view class="item-b">
          <view class="price">
            <text>￥</text>
            <text>price</text>
          </view>
          <button class="button">加入购物车</button>
        </view>
      </navigator>
      <navigator class="item" url="/pages/" open-type="navigate" hover-class="navigator-hover">
        <image class="image" src="https://z1.ax1x.com/2023/11/17/pitRcm8.png" mode="scaleToFill" />
        <view class="name">士大夫大师傅</view>
        <view class="item-b">
          <view class="price">
            <text>￥</text>
            <text>price</text>
          </view>
          <button class="button">加入购物车</button>
        </view>
      </navigator>
      <navigator class="item" url="/pages/" open-type="navigate" hover-class="navigator-hover">
        <image class="image" src="https://z1.ax1x.com/2023/11/17/pitRcm8.png" mode="scaleToFill" />
        <view class="name">士大夫大师傅</view>
        <view class="item-b">
          <view class="price">
            <text>￥</text>
            <text>price</text>
          </view>
          <button class="button">加入购物车</button>
        </view>
      </navigator>
      <navigator class="item" url="/pages/" open-type="navigate" hover-class="navigator-hover">
        <image class="image" src="https://z1.ax1x.com/2023/11/17/pitRcm8.png" mode="scaleToFill" />
        <view class="name">士大夫大师傅</view>
        <view class="item-b">
          <view class="price">
            <text>￥</text>
            <text>price</text>
          </view>
          <button class="button">加入购物车</button>
        </view>
      </navigator>
    </view>
    <view class="toolbar">
      <view class="service">
        <uni-icons type="chatboxes" size="30"></uni-icons>
        <view>客服</view>
      </view>
      <view class="cart">
        <uni-icons type="cart" size="30"></uni-icons>
        <view>购物车</view>
      </view>
      <button class="buy">立即购买</button>
    </view>
    <!-- 底部占位空盒子 -->
    <view class="toolbar-height"></view>
  </view>
</template>

<style scoped lang="scss">
.banner {
  height: 280rpx;
  margin-bottom: 20rpx;
  position: fixed;
  z-index: 1;
}

.shop {
  padding: 320rpx 20rpx 20rpx 20rpx;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .item {
    width: 346rpx;
    margin-bottom: 20rpx;
    border-radius: 10rpx;
    overflow: hidden;
    background-color: pink;
    padding: 20rpx;
    .image {
      width: 240rpx;
      height: 240rpx;
    }
    .name {
      height: 75rpx;
      margin: 10rpx 0;
      font-size: 26rpx;
      color: #262626;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    .item-b {
      font-size: 26rpx;
      line-height: 60rpx;
      padding-top: 4rpx;
      display: flex;
      justify-content: space-between;
      .price {
        color: #cf4444;
      }
      .button {
        height: 60rpx;
        font-size: 26rpx;
        margin-right: 0;
      }
    }
  }
}

.toolbar {
  height: 100rpx;
  background: pink;
  position: fixed;
  left: 0;
  right: 0;
  bottom: var(--window-bottom);
  z-index: 1;
  font-size: 26rpx;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .buy {
    height: 72rpx;
    width: 320rpx;
    border-radius: 60rpx;
    font-size: 26rpx;
    margin: auto 0;
  }
}

// 底部占位空盒子
.toolbar-height {
  height: 100rpx;
}
</style>
