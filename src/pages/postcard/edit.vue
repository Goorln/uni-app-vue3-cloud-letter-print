<script setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()
// 明信片内容
const formData = ref({
  cardContent: '',
  fromName: '',
})
</script>

<template>
  <view class="postcardEdit">
    <view class="postcardBox">
      <view class="adress">To：请选择收件人 ></view>
      <view class="textarea">
        <uni-easyinput
          type="textarea"
          v-model="formData.cardContent"
          :styles="{
            color: '#7e7e7e',
            height: '300rpx',
            lineHeight: '30rpx',
          }"
          placeholder="请输入内容"
        ></uni-easyinput>
      </view>
      <view class="from-time">
        <view class="from">
          <uni-forms-item label="From：">
            <uni-easyinput
              v-model="formData.fromName"
              placeholder="请输入署名"
              :clearable="false"
            ></uni-easyinput>
          </uni-forms-item>
        </view>
        <view class="time"
          ><uni-dateformat :date="Date.now()" format="yyyy/MM/dd"></uni-dateformat
        ></view>
      </view>
    </view>
    <button class="button" :style="{ bottom: safeAreaInsets?.bottom + 'px' }">下 一 步</button>
  </view>
</template>

<style lang="scss">
.postcardEdit {
  padding: 20rpx 40rpx;
  font-size: 26rpx;
  .postcardBox {
    height: 66vh;
    padding: 0 40rpx;
    background: url('https://z1.ax1x.com/2023/11/27/piBZiid.jpg') center center/cover no-repeat;
    .adress {
      padding-top: 110rpx;
    }
    .textarea {
      padding-top: 68rpx;
    }
    .from-time {
      padding-top: 40rpx;
      line-height: 40rpx;
      text-align: right;
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
  ::v-deep .uni-easyinput__content-input {
    text-align: right;
    padding-left: 0 !important;
  }
  ::v-deep .uni-forms-item__label {
    width: 90rpx !important;
  }
  ::v-deep .uni-forms-item {
    justify-content: flex-end;
    margin-bottom: 0 !important;
  }
  ::v-deep .uni-forms-item__content {
    flex: 0;
  }
  ::v-deep .uni-easyinput__content {
    border: none !important;
    background-color: transparent !important;
  }
  ::v-deep .uni-easyinput__content-textarea {
    height: 410rpx;
    line-height: 52rpx !important;
  }
  ::v-deep .uni-easyinput {
    line-height: 52rpx !important;
  }
  ::v-deep .from .uni-easyinput {
    width: 140rpx !important;
  }
}
</style>
