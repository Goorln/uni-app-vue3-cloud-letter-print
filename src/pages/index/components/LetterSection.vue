<script setup></script>

<template>
  <view class="section">
    <navigator class="item left" url="/pages/common/instructions?type=0" hover-class="none">
      <view class="title">
        <view class="title-zh">正常信件</view>
        <view>Letter</view>
      </view>
      <image class="image" src="https://z1.ax1x.com/2023/11/22/pidCvqI.png" mode="scaleToFill" />
      <button class="button">立即邮寄</button>
    </navigator>
    <view class="item right">
      <navigator class="r-item postcard" url="/pages/common/instructions?type=1" hover-class="none">
        <view class="postcard-l">
          <view class="title">
            <view class="title-zh">明信片</view>
            <view>Postcard</view>
          </view>
          <button class="button">立即邮寄</button>
        </view>
        <image class="image" src="https://z1.ax1x.com/2023/11/22/pidiy3F.png" mode="aspectFit" />
      </navigator>
      <view class="r-item meet">
        <view class="title">见面倒计时</view>
        <view class="meet-b">
          <view class="setting">
            <view>距离相见还有</view>
            <view><text style="text-decoration: underline">去设置</text>天</view>
          </view>
          <image
            class="image"
            src="https://z1.ax1x.com/2023/11/22/pidF1bR.png"
            mode="scaleToFill"
          />
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped lang="scss">
.section {
  padding: 20rpx;
  display: flex;
  justify-content: space-between;
  .item {
    width: 49%;
    border-radius: 12rpx;
  }
  .left {
    background-image: linear-gradient(25deg, #bcf2fd, #e3fff7);
    height: 360rpx;
    display: flex;
    flex-direction: column;
    padding: 20rpx;
    .title {
      color: #2d7afe;
      .title-zh {
        font-weight: 700;
        font-size: 32rpx;
      }
    }

    .image {
      width: 160rpx;
      margin-left: auto;
      opacity: 0.6;
    }
    .button {
      height: 80rpx;
      line-height: 46rpx;
      margin-left: 0;
    }
  }
  .right {
    .postcard {
      background-image: linear-gradient(25deg, #c0fcec, #befbe4);
      display: flex;
      justify-content: space-between;
      .postcard-l {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .title {
          color: #3cb255;
          .title-zh {
            font-weight: 700;
          }
        }
      }

      .image {
        width: 140rpx;
        opacity: 0.7;
      }
      .button {
        background: #3cb255;
        height: 46rpx;
        line-height: 46rpx;
      }
    }
    .meet {
      .title {
        color: #fab562;
        font-weight: 700;
      }
      .meet-b {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        .setting {
          font-size: 26rpx;
          color: #b59e36;
        }
      }
      .image {
        height: 90rpx;
        width: 120rpx;
      }
    }
    .r-item {
      border-radius: 12rpx;
      height: 172rpx;
      padding: 20rpx;
      &:last-child {
        margin-top: 16rpx;
        background-image: linear-gradient(25deg, #ffed84, #fafbbe);
      }
    }
  }
}
</style>
