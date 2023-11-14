<script setup>
import { ref } from 'vue'
import { stepList } from '@/static/json/dataJson.js'
const active = ref(0)
const list = ref([])
list.value = stepList
</script>

<template>
  <view class="steps">
    <uni-steps :options="list" :active="active" />
  </view>
</template>

<style lang="scss">
.steps {
  background: #fff;
  padding: 20rpx 0;
}
</style>
