<script setup>
import { ref } from 'vue'
import { stepList, feeInfo, mailingOptions } from '@/static/json/dataJson.js'
import { useCartStore } from '@/stores/modules/cart.js'

const cartStore = useCartStore()

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

const selectedIndex = ref(0)

const radioData = ref([
  {
    title: '微信支付',
    value: 0,
    icon: 'weixin',
    size: '26',
    color: '#07c160',
  },
  {
    title: '余额支付',
    value: 1,
    icon: 'wallet-filled',
    size: '26',
    color: '#fab562',
  },
])
const balance = ref(0)
const currentRadioValue = ref(0)
const onChangePaymentItem = (item) => {
  if (balance.value === 0) {
    uni.showToast({ icon: 'none', title: '余额不足，请先充值~' })
    return
  }
  currentRadioValue.value = item.value
}
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
      <view class="goods-item" v-for="item in cartStore.cartInfo" :key="item.id">
        <image class="image" :src="item.picture" mode="scaleToFill" />
        <view class="title">
          <view>{{ item.name }}</view>
          <view>数量：X {{ item.quantity }}</view>
          <view>单价：￥{{ item.price }}</view>
        </view>
      </view>
    </view>
    <!-- 邮寄方式 -->
    <YxyRadioItem
      v-model:options="mailingOptions"
      @update:options="mailingOptions = $event"
      v-model:selected="selectedIndex"
      @update:selected="
        (index) => {
          mailingOptions.items[index].current = true
          mailingOptions.items.forEach((item) => {
            if (item !== mailingOptions.items[index]) {
              item.current = false
            }
          })
        }
      "
    />
    <!-- 支付方式 -->
    <view class="payment">
      <view class="title">支付方式</view>
      <view class="payItems">
        <view v-for="item in radioData" :key="item.value">
          <label :for="item.title" class="label">
            <view class="pay-item-l" @tap="onChangePaymentItem(item)">
              <view class="circle" :class="{ checked: currentRadioValue == item.value }"></view>
              <uni-icons :type="item.icon" :size="item.size" :color="item.color"></uni-icons>
              <view>{{ item.title }}</view>
              <view v-if="item.value == '1'">（￥{{ balance.toFixed(2) }}）</view>
            </view>
            <navigator url="/pages/" open-type="navigate" hover-class="none">
              <view v-if="item.value == '1'" style="color: red">充值最高享9折优惠 ></view>
            </navigator>
          </label>
        </view>
      </view>
    </view>
    <!-- 优惠券 -->
    <view class="coupon">
      <view class="title">优惠券</view>
      <view class="text">无可用优惠券</view>
    </view>
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
      <button class="button">立即付款 {{ cartStore.allPrice.toFixed(2) }} 元</button>
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
.payment {
  background: #fff;
  padding: 0 20rpx 20rpx;
  margin-top: -30rpx;

  .title {
    font-size: 26rpx;
    color: #7e7e7e;
    margin-bottom: 20rpx;
  }
  .payItems {
    font-size: 26rpx;
    .label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .pay-item-l {
        display: flex;
        align-items: center;
      }
    }
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
}
.coupon {
  background: #fff;
  padding: 20rpx;
  font-size: 26rpx;
  display: flex;
  justify-content: space-between;
  .text {
    color: #7e7e7e;
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
