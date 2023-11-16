<script setup>
import { ref } from 'vue'
import { letterPopupList } from '@/static/json/dataJson.js'

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

const option = ref([
  { name: '无照片', price: '￥0.00', current: '' },
  { name: '上传照片', price: '首张免费', current: true },
])
const onClickItem = (index) => {
  option.value.forEach((item, i) => {
    if (index === i) {
      item.current = !item.current
    } else {
      item.current = false
    }
  })
}
const imgArr = ref([])
const imagePath = ref()
const uploadImg = () => {
  uni.chooseImage({
    success: (res) => {
      imagePath.value = res.tempFilePaths[0]
      // 裁剪图片

      // console.log(res.tempFilePaths[0])
      imgArr.value.push(res.tempFilePaths[0])
      // console.log(imgArr.value)
    },
  })
}

const delImg = (id) => {
  imgArr.value.splice(id, 1)
}
const popup = ref()
const openPopup = () => {
  popup.value.open()
}
</script>

<template>
  <view class="chooseImg">
    <!-- <YxyRadioItem :option="options" /> -->
    <text class="desc">请选择需要冲洗照片的数量</text>
    <view class="option">
      <view
        v-for="(item, index) in option"
        :key="index"
        class="item"
        :class="item.current ? 'selected' : ''"
        @tap="onClickItem(index)"
      >
        <view class="item-t">{{ item.name }}</view>
        <view class="price">{{ item.price }}</view>
      </view>
      <view class="item">
        <view class="item-t"
          >数量: <text class="red">{{ imgArr.length ? imgArr.length : 0 }}</text> 张</view
        >
        <view
          >价格:
          <text class="red">{{
            imgArr.length && imgArr.length > 1 ? ((imgArr.length - 1) * 2.5).toFixed(1) : 0
          }}</text>
          元</view
        >
      </view>
    </view>
    <view class="content">
      <view v-if="option[0].current"></view>
      <view v-if="option[1].current">
        <view class="desc">选择您要添加的照片</view>
        <view class="imgItems">
          <view class="imgItem" v-for="(ite, j) in imgArr" :key="j">
            <image class="upload" :src="ite" mode="widthFix" />
            <view @click.stop="delImg(j)" style="display: inline">
              <uni-icons type="closeempty" class="close" size="20"></uni-icons>
            </view>
          </view>
          <image
            class="upload gray"
            @click="uploadImg"
            src="/static/images/picture.png"
            mode="widthFix"
          />
        </view>
      </view>
    </view>

    <button @click="openPopup" class="button" :style="{ bottom: safeAreaInsets?.bottom + 'px' }">
      下 一 步
    </button>
    <uni-popup class="popup" ref="popup" type="center" background-color="#fff">
      <uni-icons type="closeempty" class="close" size="20" @tap="popup.close()"></uni-icons>
      <view class="popup-content">
        <view v-for="(it, k) in letterPopupList" :key="k">
          <view class="popup-text">{{ it.text }}</view>
          <!-- type,0 => 线上写信, 1 => 手写拍照, 2 => 钢笔代写，3=> 是否回显 -->
          <navigator :url="`/pages/write/write?type=${it.type}`" hover-class="none">
            <button class="popup-btn">{{ it.button }}</button>
          </navigator>
        </view>
      </view>
    </uni-popup>
  </view>
</template>

<style lang="scss">
.chooseImg {
  background: #fff;
  margin-top: 20rpx;
  padding: 20rpx;
  .desc {
    font-size: 26rpx;
    color: #7e7e7e;
    margin-bottom: 20rpx;
  }
  .imgItems {
    display: flex;
    flex-wrap: wrap;
    .imgItem {
      width: 200rpx;
      height: 300rpx;
      position: relative;
      margin-right: 20rpx;
      margin-bottom: 20rpx;
      border: 1px solid pink;
      overflow: hidden;
      .close {
        position: absolute;
        right: 0;
        top: 0;
        background-color: rgba(0, 0, 0, 0.4);
        color: #fff;
      }
    }
  }
  .option {
    display: flex;
    margin: 20rpx 0;
    .item {
      width: 140rpx;
      border: 1rpx solid #ccc;
      text-align: center;
      padding: 15rpx 0;
      margin-right: 40rpx;
      &:last-child {
        border: 0;
        width: 200rpx;
        text-align: left;
      }
      .item-t {
        padding-bottom: 8rpx;
      }
      .red {
        color: red;
      }
      &.selected {
        border: 1rpx solid #007aff;
        position: relative;
      }
      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0rpx;
        right: 0rpx;
        border-bottom: 30rpx solid #007aff;
        border-left: 30rpx solid transparent;
      }
      &.selected::before {
        content: '';
        position: absolute;
        width: 15rpx;
        height: 8rpx;
        background: transparent;
        bottom: 10rpx;
        right: 0rpx;
        border: 2rpx solid white;
        border-top: none;
        border-right: none;
        transform: rotate(-55deg);
        z-index: 1;
      }
      .price {
        font-size: 26rpx;
        color: rgb(0, 106, 255);
      }
    }
  }
  .content {
    .upload {
      width: 200rpx;
    }
    .gray {
      opacity: 0.6;
    }
  }
  .button {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    overflow: hidden;

    width: 80%;
    height: 68rpx;
    line-height: 68rpx;
  }
  .popup {
    .close {
      display: flex;
      justify-content: flex-end;
      height: 20rpx;
    }
    .popup-content {
      padding: 20rpx 70rpx;
      .popup-text {
        font-size: 28rpx;
      }
      .popup-btn {
        height: 56rpx;
        line-height: 56rpx;
        margin: 12rpx;
      }
    }
  }
}
</style>
