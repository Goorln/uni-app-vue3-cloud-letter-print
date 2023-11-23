<script setup>
import { ref, onMounted, getCurrentInstance, nextTick } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { goodsList } from '@/static/json/dataJson.js'
import { useCartStore } from '@/stores/modules/cart.js'
const cartStore = useCartStore()

// 获取屏幕边界到安全区域距离
const { safeAreaInsets, safeArea, windowHeight } = uni.getSystemInfoSync()

// 判断是否是带有tabber的页面
const hasTabber = ref(false)
const pages = getCurrentPages()
hasTabber.value = pages[0].route.indexOf('shop') != -1 ? true : false
// 设置动画效果
// 购物车的位置
const shoppingCarSize = ref({
  left: 24,
  top: 619,
})

// 查询元素信息方法 -> 结束动画位置获取
const instance = getCurrentInstance()
onMounted(() => {
  // 在下次 DOM 更新后查询位置
  const query = uni.createSelectorQuery().in(instance)
  query
    .select('.cart')
    .boundingClientRect((rect) => {
      console.log(rect, rect.left, rect.top, 'rect')
      shoppingCarSize.value.left = rect.left
      shoppingCarSize.value.top = rect.top
    })
    .exec()
  console.log(shoppingCarSize.value, '222')
})

let aniTimer
const playAnimation = (left, top) => {
  aniTimer = setTimeout(() => {
    style.value = `
          --startLeft: ${left}px;
          --startTop: ${top}px;
          --endLeft: ${shoppingCarSize.value.left}px;
          --endTop: ${shoppingCarSize.value.top}px;
          animation: runTop .3s cubic-bezier(.66,.1,1,.41), runLeft .3s linear;
        `
  }, 50)
}

const style = ref({})

// 商品加入购物车
const addCart = (goods, ev) => {
  // console.log(goods, ev.target, 'goods')
  // 获取动画初始位置
  let top = ev.target.y - 16
  let left = ev.target.x - 10
  style.value = `top:${top}px;left:${left}px;`
  // 调用动画方法
  playAnimation(left, top)

  cartStore.addCart(goods)
}

// 去下单
const buy = () => {}
</script>

<template>
  <view class="goods">
    <view class="shop" :style="{ height: windowHeight + 200 + 'rpx' }">
      <!-- 一级分类 -->
      <scroll-view class="primary" scroll-y>
        <view class="item active">
          <text class="name">分类</text>
        </view>
        <view class="item">
          <text class="name">分类</text>
        </view>
        <view class="item">
          <text class="name">分类</text>
        </view>
      </scroll-view>
      <!-- 商品列表 -->
      <scroll-view class="secondary" scroll-y>
        <navigator
          class="item"
          open-type="navigate"
          hover-class="none"
          v-for="item in goodsList"
          :key="item.id"
          :url="`/pages/detail/detail?id=${item.id}`"
        >
          <image class="image" :src="item.picture" mode="aspectFill" />
          <view class="middle">
            <view class="name">{{ item.name }}</view>
            <view class="desc">{{ item.desc }}</view>
            <view class="price">
              <text>￥{{ item.price }}</text>
            </view>
          </view>
          <button class="button" @tap.stop="addCart(item, $event)">+</button>
        </navigator>
      </scroll-view>
    </view>
    <view class="animat" :style="style">1</view>

    <view class="toolbar" :style="{ bottom: hasTabber ? 0 : safeAreaInsets.bottom + 'px' }">
      <view class="cart" id="cart">
        <uni-badge
          class="uni-badge-left-margin"
          :text="cartStore.allCount"
          absolute="rightTop"
          :offset="[0, 0]"
          size="normal"
        >
          <uni-icons type="cart" size="46" color="#fff"></uni-icons>
        </uni-badge>

        <!-- <view>购物车</view> -->
      </view>
      <view class="service">
        <uni-icons type="chatboxes" size="30"></uni-icons>
        <view>客服</view>
      </view>
      <navigator url="/pages/order/order" open-type="navigate" hover-class="none">
        <button class="buy" @tap="buy">去下单</button>
      </navigator>
    </view>
    <!-- 底部占位空盒子 -->
    <view class="toolbar-height"></view>
  </view>
</template>

<style scoped lang="scss">
.goods {
  display: flex;
  flex-direction: column;

  // 商品列表
  .shop {
    margin-top: 20rpx;
    display: flex;
    .primary {
      overflow: hidden;
      width: 180rpx;
      flex: none;
      background-color: #f6f6f6;
      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 96rpx;
        font-size: 26rpx;
        color: #595c63;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          left: 42rpx;
          bottom: 0;
          width: 96rpx;
          border-top: 1rpx solid #e3e4e7;
        }
      }
      .active {
        background-color: #fff;
        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 8rpx;
          height: 100%;
          background-color: #27ba9b;
        }
      }
    }
    .secondary {
      background-color: #fff;
      height: 100%;
      .item {
        display: flex;
        padding: 20rpx;
        position: relative;
        .image {
          width: 204rpx;
          height: 204rpx;
        }
        .middle {
          flex: 1;
          padding: 20rpx;
          .price {
            padding-top: 40rpx;
          }
        }
        .button {
          width: 48rpx;
          height: 48rpx;
          line-height: 48rpx;
          border-radius: 50%;
          margin: 0;
          padding: 0;
          position: absolute;
          bottom: 30px;
          right: 15px;
        }
      }
    }
  }
  .animat {
    width: 48rpx;
    height: 48rpx;
    position: fixed;
    // background: #007aff;
    top: 0px;
    left: 0px;
    background: red;
    border-radius: 50%;
    z-index: 1;
  }

  .toolbar {
    height: 100rpx;
    background: #e7e7e7;
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
    .cart {
      border-radius: 50%;
      background: #959797;
      padding: 6rpx;
      box-shadow: 0 0 16rpx #514e4e;
    }
  }

  // 底部占位空盒子
  .toolbar-height {
    height: 100rpx;
  }
}
@keyframes runTop {
  0% {
    top: var(--startTop);
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    top: var(--endTop);
    opacity: 0;
  }
}
@keyframes runLeft {
  0% {
    left: var(--startLeft);
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    left: var(--endLeft);
    opacity: 0;
  }
}
</style>
