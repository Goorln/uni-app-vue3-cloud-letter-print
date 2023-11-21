<script setup>
import { ref, onMounted } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import ChooseImg from './components/ChooseImg.vue'
const currentType = ref(0)
onLoad((options) => {
  currentType.value = options.type
})
</script>

<template>
  <view class="postcard">
    <ChooseImg v-if="currentType === '3'" />
  </view>
</template>

<style lang="scss">
.postcard {
  padding: 20rpx 40rpx;
}
::v-deep .file-picker__box {
  margin: 10rpx auto;
}
</style>
