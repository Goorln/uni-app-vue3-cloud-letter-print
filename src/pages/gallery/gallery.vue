<script setup>
import { ref } from 'vue'
import { stepList, galleryLists } from '@/static/json/dataJson.js'

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

let list = ref([])
list.value = galleryLists

const onClickItem = (i) => {
  list.value.map((item, index) => {
    if (i === index) {
      item.current = !item.current
    } else {
      item.current = false
    }
  })
}
const msgType = ref('')
const alertDialog = ref(null)
const dialogToggle = (type) => {
  msgType.value = type
  alertDialog.value.open()
}
// 不需要购买商品，直接跳转支付页面
const dialogClose = () => {
  uni.navigateTo({ url: '/pages/order/order' })
}
// 需要购买商品
const dialogConfirm = () => {
  uni.navigateTo({ url: '/pages/cart/cart' })
}

//
const current = ref(0)
const btnList = ref([
  { text: '全部', type: 0 },
  { text: '通用', type: 1 },
  { text: '极致', type: 2 },
  { text: '简约', type: 3 },
  { text: '生日', type: 4 },
])
// 处理选项
const handleChange = (e) => {
  current.value = e.target.dataset.type
  if (current.value === 0) {
    list.value = galleryLists
  } else {
    list.value = galleryLists
    list.value = list.value.filter((item) => item.type === current.value)
  }
}
</script>

<template>
  <view class="gallery">
    <!-- 步骤条 -->
    <YxySteps :options="stepList" :active="2" />
    <view class="list" :style="{ paddingBottom: safeAreaInsets?.bottom + 40 + 'px' }">
      <view class="button-group" @tap="handleChange">
        <button
          v-for="item in btnList"
          :key="item.text"
          class="button"
          :class="{ selected: current === item.type }"
          :data-type="item.type"
        >
          {{ item.text }}
        </button>
      </view>
      <view class="items">
        <view class="item" v-for="(item, index) in list" :key="index" @tap="onClickItem(index)">
          <view
            class="item-t"
            :style="{ background: `url(${item.picture}) center center/cover no-repeat` }"
          >
            <view class="preview">预览</view>
            <view class="option" :class="item.current ? 'checked' : ''"></view>
          </view>
          <view class="item-b">
            <view>{{ item.title }}</view>
            <view class="price">￥{{ item.price.toFixed(2) }}</view>
          </view>
        </view>
      </view>
    </view>
    <view class="toolbar" :style="{ paddingBottom: safeAreaInsets?.bottom + 'px' }">
      <button class="button" @click="dialogToggle('info')">下 一 步</button>
    </view>
    <uni-popup ref="alertDialog" type="dialog">
      <uni-popup-dialog
        :type="msgType"
        cancelText="不需要"
        confirmText="购买商品"
        title="提示"
        content="您是否需要给收信人邮寄信封，邮票，信纸等物品"
        @confirm="dialogConfirm"
        @close="dialogClose"
      ></uni-popup-dialog>
    </uni-popup>
  </view>
</template>

<style scoped lang="scss">
.gallery {
  .list {
    background: #fff;
    margin-top: 20rpx;
    padding-top: 20rpx;
    .items {
      padding: 28rpx;
      display: flex;
      flex-wrap: wrap;
      font-size: 26rpx;
      justify-content: space-between;
      .item {
        width: 48%;

        .item-t {
          display: flex;
          justify-content: space-between;
          height: 400rpx;
          border: 1px solid pink;
          padding: 20rpx;
          .preview {
            height: 48rpx;
            color: #093e7f;
            border: 2rpx solid #093e7f;
            padding: 4rpx 20rpx;
            font-weight: 700;
            border-radius: 28rpx;
          }
          .option {
            width: 46rpx;
            height: 46rpx;
            border: 2rpx solid #fdfdfd;
            box-shadow: 0 0 10rpx rgb(242, 241, 241);
            border-radius: 28rpx;
            background: rgba($color: #000000, $alpha: 0.2);
            &.checked {
              border: 4rpx solid #097d7f;
              position: relative;
              background: transparent;
            }
            &.checked::before {
              content: '';
              width: 24rpx;
              height: 12rpx;
              color: red;
              position: absolute;
              top: 6rpx;
              left: 6rpx;
              border-bottom: 4rpx solid #097d7f;
              border-left: 4rpx solid #097d7f;
              transform: rotate(-45deg);
            }
          }
        }
        .item-b {
          padding: 20rpx 0 40rpx;
          display: flex;
          justify-content: space-between;
          .price {
            color: red;
          }
        }
      }
    }
    .button-group {
      display: flex;
      .button {
        height: 60rpx;
        line-height: 60rpx;
        font-size: 26rpx;
        color: #676767;
        background: #e8e7e7;
        &.selected {
          color: #fff;
          background: #007aff;
        }
      }
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
      font-size: 28rpx;
      margin: 20rpx 148rpx;
      border-radius: 40rpx;
      color: #fff;
      background: $uni-color-primary;
    }
  }
}
</style>
