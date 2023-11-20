<script setup>
import { ref } from 'vue'
import { stepList } from '@/static/json/dataJson.js'
</script>

<template>
  <view class="cart">
    <!-- 步骤条 -->
    <YxySteps :options="stepList" :active="3" />
    <YxyGoods />
  </view>
</template>

<style scoped lang="scss"></style>
