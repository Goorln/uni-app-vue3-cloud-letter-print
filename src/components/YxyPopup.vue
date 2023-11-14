<script setup>
import { ref } from 'vue'

const popup = ref()
const openPopup = () => {
  popup.value.open()
}
</script>

<template>
  <!-- 普通弹窗 -->
  <uni-popup ref="popup" type="center" background-color="#fff">
    <view class="popup-content">
      <view v-for="(item, index) in list" :key="index">
        <view>{{ item.text }}</view>
        <button>{{ item.button }}</button>
      </view>
    </view>
  </uni-popup>
</template>

<style lang="scss"></style>
