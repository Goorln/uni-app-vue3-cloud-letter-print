<script setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { goodsList } from '@/static/json/dataJson.js'
const goodsDetail = ref({})
onLoad((options) => {
  goodsDetail.value = goodsList.filter((item) => item.id == options.id)
})
</script>

<template>
  <view class="detail">
    <view class="preview">
      <image class="image" :src="goodsDetail[0]?.picture" mode="scaleToFill" />
    </view>
    <view class="content">
      <view>【商品名称】:{{ goodsDetail[0]?.name }}</view>
      <view class="desc">【商品描述】：{{ goodsDetail[0]?.desc }}</view>
      <view class="price">【商品价格】￥{{ goodsDetail[0]?.price }}</view>
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
