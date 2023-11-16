<script setup>
import { ref } from 'vue'
import { useLetterStore } from '@/stores'
import { stepList, options } from '@/static/json/dataJson.js'

// 获取屏幕边界到安全区域距离
const { safeAreaInsets } = uni.getSystemInfoSync()

const selectedIndex = ref(0)

const letterStore = useLetterStore()
</script>

<template>
  <view class="write">
    <!-- 步骤条 -->
    <YxySteps :options="stepList" :active="1" />
    <YxyRadioItem
      v-model:options="options"
      @update:options="options = $event"
      v-model:selected="selectedIndex"
      @update:selected="
        (index) => {
          options.items[index].current = true
          options.items.forEach((item) => {
            if (item !== options.items[index]) {
              item.current = false
            }
          })
        }
      "
    />
    <navigator
      v-if="letterStore.letterInfo.letterCount > 0"
      url="/pages/gallery/gallery"
      open-type="navigate"
      hover-class="none"
    >
      <button class="button" :style="{ bottom: safeAreaInsets?.bottom + 'px' }">下 一 步</button>
    </navigator>
  </view>
</template>

<style lang="scss" scoped>
.write {
  .button {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    overflow: hidden;

    width: 80%;
    height: 68rpx;
    line-height: 68rpx;
  }
}
::v-deep .is-disabled {
  background-color: transparent !important;
}
::v-deep .content-b-r .uni-easyinput {
  text-align: right !important;
}
::v-deep .content .uni-easyinput__content-input {
  padding-left: 0 !important;
}
</style>
