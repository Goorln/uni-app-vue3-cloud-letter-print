<script setup>
import { ref } from 'vue'
import ChooseImg from '@/pages/letter/components/ChooseImg.vue'
import { stepList } from '@/static/json/dataJson.js'

const active = ref(0)
</script>

<template>
  <view>
    <!-- 步骤条 -->
    <YxySteps :options="stepList" :active="0" />
    <ChooseImg />
  </view>
</template>

<style lang="scss"></style>
